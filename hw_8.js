// ДЗ 8. Повторюємо массиви (part 1)

// Створити попоредньо створити массив елементів.

const arr = [12,34,567,23,78,45,87,89,56,34,3,1,0];

// 1. Треба пройтись по всім елементам массива на вивести їх у консоль.

arr.forEach(item => console.log(item));

// 1.1. Зробити будь-яку перевірку (це може бути на довженну рядка або на порівняння з числом), щоб консоль робилась для певних елементів.


// const result = arr.filter(item => item % 2 === 0);
// console.log(result);




// 2. Реалізувати функцію, яка має приймати массив та елемент, який ми будемо шукати.
// Функція має шукати елемент у массиві та повертати true або false;

const isInArray = (arr, elem) => arr.includes(elem) ? console.log(true) : console.log(false);

isInArray(arr, 8);
isInArray(arr, 56);
isInArray(arr, 6);


// 3. У вас є список юзерів ['user', 'user1', 'user10', 'user100', 'user1000'], вам потрібно повернути перший елемент, який відповідає умові str.length > 4

const usersList = ['user', 'user1', 'user10', 'user100', 'user1000'];
let result1 = usersList.find(item => item.length > 4);

console.log(result1);

// 4. У нас є массив з попереднього завдання, але треба повернути не перший елемент, а массив всіх значеннь. Треба зробити фільтрацію.

let result2 = usersList.filter(item => item.length > 4);
console.log(result2);