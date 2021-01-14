// utilize async await in place of a Promise
// async await is non-blocking, start now, finish later
// async await bundles all our code blocks inside a function, so it can be used as a reusable component, and it's not going to block the rest of the code in the application

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // await is resolving the problem, once it's resolved, it will assign to variable, response; await for the result and attach it to response
  const data = await response.json(); // chain response to .json() and assign it to variable, data; await for the result and attach it to data.
  return data;
};

console.log('hello');
console.log('world');
getTodos()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
console.log('JS is awesome!');
console.log('JS is an amazing language!')