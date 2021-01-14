const getTodos = (callback) => { // create reusable function to be invoked in a later time
  const request = new XMLHttpRequest(); // initialize an instance of XMLHttpRequest() method;

  request.addEventListener('readystatechange', () => { // add an event listener that takes in a call back to get responseText from an external API
    if (request.readyState === 4 && request.status === 200) { // if the request state is ready / okay
      const data = JSON.parse(request.responseText); // JSON is what being passed to communicate over the  network. first, convert JSON format data to an array of objects in order for client to display and iterate the data
      callback(undefined, data)
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

// the requirements for JSON Object is that all the keys must be in double quotes. the same concept applies for string value as well.
// server transfers data to client using JSON

// e.g. String must be in double quotes

/*
  [
    {
      "name" : "Fried",
      "login" : false,
      "city" : "SF",
      "zipcode" : 94103
    },
    {
      ...
    },
    {
      ...
    },
    ...
  ]
*/
