// eslint-disable-next-line no-console
console.log('generator function in generator function');

// hello -> redux-saga -> End
function* printName() {
  yield 'Redux-Saga';
}

function* hello() {
  yield 'hello ';
  yield* printName();
  yield 'END!';
}

const iterators = hello();

// eslint-disable-next-line no-console
console.log('result 1: ', iterators.next());
// eslint-disable-next-line no-console
console.log('result 2: ', iterators.next());
// eslint-disable-next-line no-console
console.log('result 3: ', iterators.next());
