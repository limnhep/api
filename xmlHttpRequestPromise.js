const getTodos = (path) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error: bad request');
      }
    });
    request.open('GET', path);
    request.send();
  })
};

getTodos('https://jsonplaceholder.typicode.com/todos/')
  .then((data) => {
    console.log('Promise Resolved: ', data);
  })
  .catch((error) => {
    console.log('Promise Rejected: ', error);
  });


