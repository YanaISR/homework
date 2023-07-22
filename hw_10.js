// ДЗ 10. Обчисліть середнє значення
// Напишіть функцію findAverage(array), яка приймає массив чисел та обчислює середнє значення чисел.

// Приклад:
// findAverage([1, 2, 4, 7, 10]) // 4.8
// findAverage([]) // 0

// Примітка: Порожні масиви мають повертати 0.

const findAverage = array =>  array.length === 0 ? 0 : array.reduce((sum, item) => sum + item , 0)/array.length;

console.log(findAverage([1, 2, 4, 7, 10]));
console.log(findAverage([]))

