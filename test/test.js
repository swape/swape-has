'use strict';
const has = require('../src/index.min.js').has;

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
  console.info('Passed 1');
} else {
  console.warn('Failed 1');
}

if (!has(testObj, 'level1.level2.levelA.levelB.levelX')) {
  console.info('Passed 2');
} else {
  console.warn('Failed 2');
}
