const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  if (response.status !== 200) return new Error('Error: Cannot fetch data');
  const data = await response.json();
  return data;
}

getTodos()
  .then((data) => console.log('resolved: ', data))
  .catch((error) => console.log('rejected: ', error.message));