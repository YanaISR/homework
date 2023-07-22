// ДЗ 12. Кількість позитивних / сума негативних
// Дано масив цілих чисел.


// Повертає масив, де перший елемент — це кількість додатних чисел, а другий — сума від’ємних чисел. 0 не є ні позитивним, ні негативним.
// Якщо введення є порожнім масивом або має значення null, повертає порожній масив.

// Приклад:
// smaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
// smaller([]) // [].

const result = (array) => {
    if(array.length === 0) {
        return [];
    }
    const count = array.reduce((elements, arr) => (arr > 0 ? elements + 1 : elements), 0)
    const sum = array.reduce((elements, arr) => (arr < 0 ? elements + arr : false), 0)

    const res = [count, sum];
    return res;
    
} 

console.log(result([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(result([]));