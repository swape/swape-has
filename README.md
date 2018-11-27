# swape-has

Check if sub branch of an object exists. A cleaner code for checking sub sub sub sub object values.

This makes the code cleaner to check for very deep objects.

### install in node.js

```bash
npm install swape-has
```

```javascript
// require the code like this
const has = require('swape-has');
```

### use in node.js

```javascript
const has = require('swape-has');

let testObj = {
  level1: {
    level2: {
      levelA: {
        levelB: {
          levelC: {
            levelD: {
              life: 42
            }
          }
        }
      }
    }
  }
};

// check if we have this value
if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life') && testObj.level1.level2.levelA.levelB.levelC.levelD.life === 42) {
  console.info('Passed 1');
} else {
  console.warn('Failed 1');
}

// check if we don't have this value
if (!has(testObj, 'level1.level2.levelA.levelB.levelX')) {
  console.info('Passed 2');
} else {
  console.warn('Failed 2');
}

// has with value test (3rd option)
if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life', 42)) {
  console.info('Passed 3');
} else {
  console.warn('Failed 3');
}

if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life', 43)) {
  console.info('Failed 4');
} else {
  console.warn('Passed 4');
}
```

## use in browser

```html
<script src="PATH_TO_THIS_LIB/src/index.min.js"></script>
<script>

var obj = {
  level1: {
    level2: {
      level3: {
        myvar: 42
      }
    }
  }
};

if (has(obj, 'level1.level2.level3.myvar', 42)) {
  console.log('pass 1');
}

if (!has(obj, 'level1.level2.level3.X', 42)) {
  console.log('pass 2');
}

if (!has(obj, 'level1.level2.level3.myvar', 43)) {
  console.log('pass 3');
}

</script>
```

This would be written like this if we didn't use "has" function:

```javascript
  if(testObj
    && testObj.level1
    && testObj.level1.level2
    && testObj.level1.level2.levelA
    && testObj.level1.level2.levelA.levelB
    && testObj.level1.level2.levelA.levelB.levelC
    && testObj.level1.level2.levelA.levelB.levelC.levelD
    && testObj.level1.level2.levelA.levelB.levelC.levelD.life
    && testObj.level1.level2.levelA.levelB.levelC.levelD.life === 42
    ){
   // do something
  }
```
