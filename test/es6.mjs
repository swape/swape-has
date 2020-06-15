// Note: Running this test with "node --experimental-modules ./es6.mjs"
import has from '../src/index.js'

const myeTestingObject = {
  levelA: {
    levelB: {
      levelC: {
        levelD: 42
      }
    }
  }
}

if (has(myeTestingObject, 'levelA.levelB.levelC.levelD', 42)) {
  console.log('Passed the es6 test')
}
