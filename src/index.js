(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], function() {
      return (root.has = factory());
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = root.has = factory();
  } else if (typeof window !== "undefined" || typeof self !== "undefined") {
    var global = typeof window !== "undefined" ? window : self;
    global.has = factory();
  } else {
    root.has = factory();
  }
})(this, function() {
  function has(obj, spath, inValue) {
    if (!spath || spath === "" || !obj) {
      return false;
    }
    var spathArr = spath.split(".");
    if (spathArr.length === 1 && typeof obj[spath] !== "undefined") {
      return typeof inValue !== "undefined" ? inValue === obj[spath] : true;
    } else if (spathArr.length > 0) {
      if (obj && typeof obj[spathArr[0]] !== "undefined") {
        var newObj = obj[spathArr[0]];
        spathArr.shift();
        if (typeof newObj[spathArr[0]] !== "undefined") {
          if (spathArr.length === 1) {
            return typeof inValue !== "undefined"
              ? newObj[spathArr[0]] === inValue
              : true;
          } else {
            return has(newObj, spathArr.join("."), inValue);
          }
        }
      }
    }
    return false;
  }
  return has;
});
