const getTodos = (callback) => { // create reusable function to be invoked in a later time
  const request = new XMLHttpRequest(); // initialize an instance of XMLHttpRequest() method;

  request.addEventListener('readystatechange', () => { // add an event listener that takes in a call back to get responseText from an external API
    if (request.readyState === 4 && request.status === 200) { // if the request state is ready / okay
      callback(undefined, request.responseText)
    } else if (request.readyState === 4) {
      callback(`error: not able to fetch the data`, undefined)
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // utilize .open() method that takes in operations type, GET, and a link to the external API
  request.send(); // send the request and retrieve the JSON data
};

getTodos((error, data) => {
  error ? console.log(error) : console.log(data); // error first callback
});

