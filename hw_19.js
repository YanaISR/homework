// ДЗ 19. Створити функції getData, за допомогою fetch + async \ await
// Створити функції getData, за допомогою fetch + async \ await , яка прийматиме параметр url, на яким потрібно зробити запит і повернути отримане значення.

// Використовуйте https://jsonplaceholder.typicode.com/posts

const getData  = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =  await response.json();
        console.log(data);
    } catch (error){
        console.log(error)
    }
    
}

getData();