function has(obj, spath) {
  var spathArr = spath.split('.');
  if (spathArr.length > 0) {
    if (typeof obj[spathArr[0]] !== 'undefined') {
      var newObj = obj[spathArr[0]];
      spathArr.shift(); // pop the first element
      if (typeof newObj[spathArr[0]] !== 'undefined') {
        if (spathArr.length === 1) {
          return true;
        } else {
          return has(newObj, spathArr.join('.'));
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

exports.has = has;
