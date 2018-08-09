(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // the AMD loader.
    define([], function () {
      return (root.has = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = (root.has = factory());
  } else if (typeof window !== 'undefined' || typeof self !== 'undefined') {
    var global = typeof window !== 'undefined' ? window : self;
    global.has = factory();
  } else {
    root.has = factory();
  }
}(this, function () {

  function has(obj, spath, inValue) {
    if (!spath ||  spath === '') {
      return false;
    }

    var spathArr = spath.split('.');
    if (spathArr.length === 1 && typeof obj[spath] !== 'undefined') {
      if (typeof inValue !== 'undefined') {
        return (inValue === obj[spath]);
      } else {
        return true;
      }
    } else if (spathArr.length > 0) {
      if (typeof obj[spathArr[0]] !== 'undefined') {
        var newObj = obj[spathArr[0]];
        spathArr.shift(); // pop the first element
        if (typeof newObj[spathArr[0]] !== 'undefined') {
          if (spathArr.length === 1) {
            if (typeof inValue !== 'undefined') {
              return (newObj[spathArr[0]] === inValue);
            } else {
              return true;
            }
          } else {
            return has(newObj, spathArr.join('.'), inValue);
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return has;
}));
