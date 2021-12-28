import has from '../dist/index'

const myTestingObject = {
  levelA: {
    a: false,
    b: 0,
    c: null,
    d: undefined, // this one should fail
    levelB: {
      levelC: {
        levelD: 42,
      },
    },
  },
}

test('is levelD there?', () => {
  expect(has(myTestingObject, 'levelA.levelB.levelC')).toBeTruthy()
})

test('is levelC there?', () => {
  expect(has(myTestingObject, 'levelA.levelB')).toBeTruthy()
})

test('is levelD 42?', () => {
  expect(has(myTestingObject, 'levelA.levelB.levelC.levelD', 42)).toBeTruthy()
})

test('is levelX present?', () => {
  expect(has(myTestingObject, 'levelA.levelC.levelX')).toBeFalsy()
})

test('null object', () => {
  expect(has(null, 'whatever')).toBeFalsy()
})

test('null path', () => {
  expect(has(myTestingObject, null)).toBeFalsy()
})

test('empty path', () => {
  expect(has(myTestingObject)).toBeFalsy()
})

test('empty string path', () => {
  expect(has(myTestingObject, '')).toBeFalsy()
})

test('a', () => {
  expect(has(myTestingObject, 'levelA.a')).toBeTruthy()
})

test('b', () => {
  expect(has(myTestingObject, 'levelA.b')).toBeTruthy()
})

test('c', () => {
  expect(has(myTestingObject, 'levelA.c')).toBeTruthy()
})

test('d', () => {
  expect(has(myTestingObject, 'levelA.d')).toBeFalsy()
})
