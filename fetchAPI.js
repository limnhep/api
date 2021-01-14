// fetch the data
// get the response
// return the response in JSON.parse() format
// chain the result to a new Promise
// log out the new result
// log out the error

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => {
    console.log('Promise Resolved: ', response);
    return response.data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Promise Rejected: ', error);
  });

