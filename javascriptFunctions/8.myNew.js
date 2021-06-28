function myNew(constructor,...args){
  if(typeof constructor !== "function" || !constructor.prototype){
    throw TypeError(`${constructor} is not a constructor`);
  }
  const object = Object.create(constructor.prototype);
  const result = constructor.apply(object,args);

  if(result && (typeof result === 'object' || typeof result === 'function')){
    return result;
  }else{
    return object;
  }
}