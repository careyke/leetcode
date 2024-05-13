function myThrottle(fn, delay, immediate = false) {
  let timer = null;
  let called = false;

  return function (...args) {
    const context = this;
    if (immediate && !called) {
      called = true;
      return fn.apply(context, args);
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}
