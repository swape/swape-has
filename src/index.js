const checkForTypeUndefined = (value) => typeof value === 'undefined'
const notUndefinedAndHaveSameValue = (obj, path, inValue) => (!checkForTypeUndefined(inValue) ? inValue === obj[path] : true)

function has(obj, path, inValue) {
  if (!path || path === '' || !obj) {
    return false
  }

  let pathList = path.split('.')

  if (pathList.length === 1 && !checkForTypeUndefined(obj[path])) {
    return notUndefinedAndHaveSameValue(obj, path, inValue)
  }

  if (pathList.length > 0 && obj && !checkForTypeUndefined(obj[pathList[0]])) {
    const newObj = obj[pathList[0]]
    pathList.shift()
    if (!checkForTypeUndefined(newObj[pathList[0]])) {
      if (pathList.length === 1) {
        return notUndefinedAndHaveSameValue(newObj, pathList[0], inValue)
      }
      return has(newObj, pathList.join('.'), inValue)
    }
  }

  return false
}

export default has
