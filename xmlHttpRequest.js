const request = new XMLHttpRequest(); // initialize an instance of XMLHttpRequest() method;

request.addEventListener('readystatechange', () => { // add an event listener that takes in a call back to get responseText from an external API
  if (request.readyState === 4) { // if the request state is ready
    console.log(request.responseText); // then, log out the request
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // utilize .open() method that takes in operations type, GET, and a link to the external API
request.send(); // send the request and retrieve the JSON data