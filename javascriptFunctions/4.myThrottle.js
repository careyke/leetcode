function myThrottle(fn, delay, immediate = false) {
  let timer = null;
  let called = false;
  return function (...args) {
    const context = this;

    if(immediate && !called){
      fn.apply(context, args);
      called = true;
    }
    if(timer){
      return timer;
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(context, args);
    }, delay);
    return timer;
  };
}
