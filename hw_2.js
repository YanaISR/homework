//  homework 2. ДЗ 2. Перетворення зі string у number. 
// 1. За допомогою функції prompt запитати у користувача ширину блока у пікселях (наприклад: 100px) і отримати це значення\записати у змінну.
// 2. Перетворити це значення у тип number та вивести у конслоль 

console.log('ДЗ 2. Перетворення зі string у number');

const widthBlock = prompt("What is the block's width in pixels?");
console.log(typeof(widthBlock)); // not necessarily, just to check a behavior
const result = parseInt(widthBlock);
console.log(result);
console.log(typeof(result));  // not necessarily

// shorter way

// const widthBlock = parseInt(prompt("What is the block's width in pixels?"));
// console.log(widthBlock);

