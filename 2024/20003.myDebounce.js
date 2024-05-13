function myDebounce(fn, delay, immediate = false) {
  let timer = null;
  let called = false;

  return function (...args) {
    const context = this;
    if (immediate && !called) {
      called = true;
      return fn.apply(context, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// test case
const fn = myDebounce(
  () => {
    console.log("hhh");
  },
  1000,
  true
);
fn();
fn();
fn();
