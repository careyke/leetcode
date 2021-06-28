const Pending = "pending";
const Fulfilled = "fulfilled";
const Rejected = "rejected";

function MyPromise(stateManager) {
  if (typeof stateManager !== "function") {
    throw TypeError("The argumants of MyPromise must be a function");
  }
  this.state = Pending;
  this.value = undefined;
  this.reason = undefined;
  this.fulfilledCallback = [];
  this.rejectedCallback = [];

  const reject = (reason) => {
    if (this.state !== Pending) return;
    this.state = Rejected;
    this.reason = reason;
    this.rejectedCallback.forEach((cb) => {
      cb(reason);
    });
  };

  const resolve = (value) => {
    if (this.state !== Pending) return;
    if (value instanceof MyPromise) {
      value.then(resolve, reject);
    } else {
      this.state = Fulfilled;
      this.value = value;
      // 这里不能提到外面，会重复执行
      this.fulfilledCallback.forEach((cb) => {
        cb(value);
      });
    }
  };

  try {
    stateManager(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onResolve, onReject) {
  if (typeof onResolve !== "function") {
    onResolve = (value) => value;
  }
  if (typeof onReject !== "function") {
    onReject = (reason) => {
      throw reason;
    };
  }

  // 执行then中的回调函数
  const resolveThen = (value, resolve, reject, rejected = false) => {
    try {
      let returnValue = onResolve(value);
      if (rejected) {
        returnValue = onReject(value);
      }
      if (returnValue instanceof MyPromise) {
        returnValue.then(resolve, reject);
      } else {
        resolve(returnValue);
      }
    } catch (error) {
      reject(error);
    }
  };

  return new MyPromise((resolve, reject) => {
    if (this.state === Pending) {
      this.fulfilledCallback.push((value) => {
        setTimeout(() => {
          resolveThen(value, resolve, reject);
        }, 0);
      });
      this.rejectedCallback.push((value) => {
        setTimeout(() => {
          resolveThen(value, resolve, reject, true);
        }, 0);
      });
    } else if (this.state === Fulfilled) {
      setTimeout(() => {
        resolveThen(this.value, resolve, reject);
      }, 0);
    } else {
      setTimeout(() => {
        resolveThen(this.reason, resolve, reject, true);
      }, 0);
    }
  });
};

MyPromise.prototype.catch = function (onReject) {
  return this.then(undefined, onReject);
};

MyPromise.prototype.finally = function (callback) {
  return this.then(
    (value) => {
      callback();
      return value;
    },
    (reason) => {
      callback();
      throw reason;
    }
  );
};

MyPromise.reason = function (value) {
  if (value instanceof MyPromise) {
    return value;
  }
  return new MyPromise((resolve, reject) => {
    if (value && value.then && typeof value.then === "function") {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
};

MyPromise.reject = function (value) {
  return new MyPromise((resolve, reject) => {
    reject(value);
  });
};

MyPromise.all = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    const result = [];
    const len = promiseArr.length;
    let count = 0;
    promiseArr.forEach((promise, index) => {
      MyPromise.resolve(promise).then(
        (value) => {
          result[index] = value;
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

MyPromise.race = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    for (const promise of promiseArr) {
      MyPromise.resolve(promise).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};

MyPromise.allSettled = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    const result = [];
    const len = promiseArr.length;
    let count = 0;
    promiseArr.forEach((promise, index) => {
      MyPromise.resolve(promise).then(
        (value) => {
          result[index] = { status: Fulfilled, value: value };
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        (reason) => {
          result[index] = { status: Rejected, reason: reason };
          count++;
          if (count === len) {
            resolve(result);
          }
        }
      );
    });
  });
};

MyPromise.any = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    const result = [];
    const len = promiseArr.length;
    let count = 0;
    promiseArr.forEach((promise, index) => {
      MyPromise.resolve(promise).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          result[index] = value;
          count++;
          if (count === len) {
            reject(reason);
          }
        }
      );
    });
  });
};
