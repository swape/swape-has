# swape-has
Check if sub branch of an object exists. A cleaner code for checking sub sub sub sub object values.

This makes the code cleaner to check for very deep objects.


### install

```bash
npm install swape-has
```

```javascript
// require the code like this
const has = require('swape-has').has;

```

### use

```javascript
const has = require('swape-has').has;

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
