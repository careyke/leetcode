Function.prototype.myCall = function (context,...args) {
  if(context == null){
    context = window;
  }
  const symbolKey = Symbol('_fn_key_');
  context[symbolKey] = this;
  const result = context[symbolKey](...args);

  // clear
  delete context[symbolKey];
  
  return result;
};
