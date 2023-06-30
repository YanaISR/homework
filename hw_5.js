// ДЗ 5. Перевірка на спам 

//   Запитайте через prompt довільний рядок.

const string = prompt('Enter any text');

//   Перевірте, чи містить цей рядок "free". І поверніть true чи false.

if (string.includes('free')) {
    console.log(true)
} else {
    console.log(false)
}

(string.includes('free')) ? console.log(true) : console.log(false); // тернарний оператор