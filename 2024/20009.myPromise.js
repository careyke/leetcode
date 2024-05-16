/**
1. 构造函数接收一个函数作为参数，这个函数接收两个函数resolve和reject作为参数，并且会立即执行。
2. Promise实例内部存在以下属性：
   - Promise的状态
   - Promise的决议值（成功的值或者失败的原因）
   - Promise成功或失败对应的回调函数
3. 执行过程出现任何异常，都会导致Promise失败
4. 当resolve接收的参数是Promise对象时候，参考上面的分析进行特殊处理
5. Promise状态修改不可逆
6. Promise回调函数需要异步调用
 */

const Pending = "pending";
const Fulfilled = "fulfilled";
const Rejected = "rejected";

class MyPromise {
  constructor(fn) {
    this.state = Pending;
    this.result = undefined;
    this.reason = undefined;
    this.fulfilledCallback = [];
    this.rejectedCallback = [];

    this.fn = fn;

    this.init();
  }

  init() {
    try {
      this.fn(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.state !== Pending) return;
    if (result instanceof MyPromise) {
      // 处理resolve参数是promise的情况
      result.then(this.resolve, this.reject);
    } else {
      this.result = result;
      this.state = Fulfilled;

      this.fulfilledCallback.forEach((callback) => {
        setTimeout(() => {
          callback(this.result);
        }, 0);
      });
    }
  }

  reject(reason) {
    if (this.state === Pending) return;
    this.reason = reason;
    this.state = Rejected;

    this.rejectedCallback.forEach((callback) => {
      setTimeout(() => {
        callback(this.reason);
      }, 0);
    });
  }

  onFulfillDefault(value) {
    return value;
  }

  onRejectDefault(error) {
    throw error;
  }

  then(onFulfill, onReject) {
    onFulfill = onFulfill || this.onFulfillDefault;
    onReject = onReject || this.onRejectDefault;

    const context = this;

    const exeThen = (value, resolve, reject, fulfilled) => {
      try {
        if (fulfilled) {
          const result = onFulfill(value);
          resolve(result);
        } else {
          // 前一个 promise 错误被 catch之后错误不会感染下一个
          const reason = onReject(value);
          resolve(reason);
        }
      } catch (error) {
        reject(error);
      }
    };

    return new MyPromise((resolve, reject) => {
      if (context.state === Pending) {
        // 前一个Promise还没有完成
        context.fulfilledCallback.push((value) => {
          exeThen(value, resolve, reject, true);
        });

        context.rejectedCallback.push((value) => {
          exeThen(value, resolve, reject, false);
        });
      } else if (context.state === Fulfilled) {
        setTimeout(() => {
          exeThen(context.result, resolve, reject, true);
        }, 0);
      } else {
        setTimeout(() => {
          exeThen(context.reason, resolve, reject, false);
        }, 0);
      }
    });
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }

  finally(onFinally) {
    return this.then(
      (result) => {
        onFinally();
        return result;
      },
      (reason) => {
        onFinally();
        throw reason;
      }
    );
  }
}

MyPromise.resolve = function (result) {
  if (result instanceof MyPromise) {
    return result;
  }

  return new MyPromise((resolve, reject) => {
    if (result && result.then && typeof result.then === "function") {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  });
};

MyPromise.reject = function (reason) {
  return new MyPromise((undefined, reject) => {
    return reject(reason);
  });
};

MyPromise.all = function (promises) {
  const len = promises.length;
  const result = Array(len);
  let count = 0;
  return new MyPromise((resolve, reject) => {
    promises.forEach((p, index) => {
      MyPromise.resolve(p).then(
        (value) => {
          result[index] = value;
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    for (let p of promises) {
      MyPromise.resolve(p).then(
        (value) => {
          resolve(value);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

MyPromise.allSettled = function (promises) {
  const len = promises.length;
  const result = Array(len);
  let count = 0;

  return new MyPromise((resolve) => {
    promises.forEach((p, index) => {
      MyPromise.resolve(p).then(
        (value) => {
          result[index] = {
            status: Fulfilled,
            value,
          };
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        (reason) => {
          result[index] = {
            status: Rejected,
            reason,
          };
          count++;
          if (count === len) {
            resolve(result);
          }
        }
      );
    });
  });
};

MyPromise.any = function (promises) {
  const len = promises.length;
  const errors = [];
  let count = 0;
  let isFinished = false;

  return new MyPromise((resolve, reject) => {
    promises.forEach((p, index) => {
      MyPromise.resolve(p).then(
        (value) => {
          resolve(value);
          isFinished = true;
        },
        (reason) => {
          if (isFinished) return;
          errors[index] = reason;
          count++;

          if (count === len) {
            const error = new AggregateError(errors.filter(Boolean));
            reject(error);
          }
        }
      );
    });
  });
};

// 为了通过管理异常 - 同步的异常和异步的异常都可以通过同一个Promise catch住
MyPromise.try = function (fn) {
  return new MyPromise((resolve) => {
    resolve(fn());
  });
};
