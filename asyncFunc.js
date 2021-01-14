// JS is a single-threaded language, and to perform multiple concurrency at the same time, utilize Async Function or in ES6, there is async await function => the statement starts as soon as it's being invoked and then the complete later.

// e.g.

console.log('hello');
console.log('world');
setTimeout(() => {
  console.log('this will invoke after 1000 ms');
}, 1000);
console.log('JS is awesome!')

/*
  The order of operations:
  log: hello
  log: world
  log: JS is awesome!
  log: this will invoke after 1000 ms
*/