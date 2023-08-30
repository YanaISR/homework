// ДЗ 18. Практика fetch
// За допомогою fetch треба зробити запит на будь-який сервіс з https://jsonplaceholder.typicode.com/. Це може бути /posts, /users або інші.
// Зробити запит, розпарсити данні з json, та вивести у консоль результат.

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))



