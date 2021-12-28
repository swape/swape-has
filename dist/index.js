"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var checkForTypeUndefined = function checkForTypeUndefined(value) {
  return typeof value === 'undefined';
};

var notUndefinedAndHaveSameValue = function notUndefinedAndHaveSameValue(obj, path, inValue) {
  return !checkForTypeUndefined(inValue) ? inValue === obj[path] : true;
};

function has(obj, path, inValue) {
  if (!path || path === "" || !obj) {
    return false;
  }

  var pathList = path.split(".");

  if (pathList.length === 1 && !checkForTypeUndefined(obj[path])) {
    return notUndefinedAndHaveSameValue(obj, path, inValue);
  }

  if (pathList.length > 0 && obj && !checkForTypeUndefined(obj[pathList[0]])) {
    var newObj = obj[pathList[0]];
    pathList.shift();

    if (!checkForTypeUndefined(newObj[pathList[0]])) {
      if (pathList.length === 1) {
        return notUndefinedAndHaveSameValue(newObj, pathList[0], inValue);
      }

      return has(newObj, pathList.join("."), inValue);
    }
  }

  return false;
}

var _default = has;
exports["default"] = _default;