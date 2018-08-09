'use strict';
const has = require('../src/index.js');


let testObj = {
  data: ['1', 2, '3', 4],
  zero: 0,
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
/*
 This would be written like this if we didn't use "has" function:

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

*/
if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life') && testObj.level1.level2.levelA.levelB.levelC.levelD.life === 42) {
  console.log('Passed 1');
} else {
  console.log('Failed 1');
}

if (!has(testObj, 'level1.level2.levelA.levelB.levelX')) {
  console.log('Passed 2');
} else {
  console.log('Failed 2');
}

// has with value test (3rd option)
if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life', 42)) {
  console.log('Passed 3');
} else {
  console.log('Failed 3');
}

if (has(testObj, 'level1.level2.levelA.levelB.levelC.levelD.life', 43)) {
  console.log('Failed 4');
} else {
  console.log('Passed 4');
}

if (!has(testObj, 'data')) {
  console.log('Failed 5');
} else {
  console.log('Passed 5');
}

if (!has(testObj, 'zero')) {
  console.log('Failed 6');
} else {
  console.log('Passed 6');
}
