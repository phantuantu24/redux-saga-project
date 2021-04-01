// eslint-disable-next-line no-console
console.log('Infinite Loop');

function* helloGeneratorFunction() {
  while (true) {
    yield 'Listenning...';
  }
}

const iterators = helloGeneratorFunction();

// eslint-disable-next-line no-console
console.log('result 1: ', iterators.next());
// eslint-disable-next-line no-console
console.log('result 2: ', iterators.next());
// eslint-disable-next-line no-console
console.log('result 3: ', iterators.next());
