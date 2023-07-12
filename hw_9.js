// ДЗ 9. Продовжуємо вивчати масиви (2 part)
// Є массив:

const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

// Перше завдання:
// Вам треба перевірити чи всі елементи довше ніж 4 символа.
// Та вивести у консоль результат (true або false).


const result = users.every(item => item.length > 4);
console.log(result);


// Друге завдання:
// Вам треба перевірити хочаб один елемент довше ніж 4 символа.
// Та вивести у консоль результат (true або false).

const result_1 = users.some(item => item.length > 4);
console.log(result_1);


// Трете завдання:
// Потрібно перетворити массив користувачів таким чином, щоб ми отримали новий массив з назвамикористувачів написанних капслоком.
// Приклад: user1 -> USER1


const result_2 = users.map(item => item.toUpperCase());
console.log(result_2);