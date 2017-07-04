function has(obj, spath, inValue) {
  var spathArr = spath.split('.');
  if (spathArr.length > 0) {
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


module.exports = {
  has: has
};
