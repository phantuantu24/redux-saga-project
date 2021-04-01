// eslint-disable-next-line no-console
console.log('learning generator function');

function* helloGeneratorFunction() {
  yield 2019; // stop and return value
  yield 2020; // stop and return value
  return 'redux-saga'; // permanently stop generator function with return or throw error
}
const result = helloGeneratorFunction(); // iterators

// eslint-disable-next-line no-console
console.log('result 1: ', result.next()); // 2019 - done: false
// eslint-disable-next-line no-console
console.log('result 2: ', result.next()); // 2020 - done: false
// eslint-disable-next-line no-console
console.log('result 3: ', result.next()); // redux-saga - done: true
