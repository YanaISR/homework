// ДЗ 7. Arrow function
// Переписати чотири функції з "ДЗ 6. Практика з функціями" за допомогою стрілочний функцій

// 1. Написати функцію maxNumber(a, b), яка отримує два числа, то повертає більший з них.

a = +prompt('Enter a number');
b = +prompt('Enter an another number');

const maxNumber = (a,b) => {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log('They are equal');
    }
}

maxNumber(a, b);


// 2. Написати функцію checkAge(age), яка отримую вік користувача і якщо йому меньше 18, тоді повертати false, інакше - true

age = +prompt('How old are you?');

const checkAge = age => age < 18 ? false : true;

console.log(checkAge(age));


// 3. Переписати  “ДЗ 4. Усічення рядка” на окрему функцію.
// Можете залишити prompt, або отримувати параметри, як аргумент.

const cutString = (str, maxLength) => {
    str = prompt('Write something');
    maxLength = prompt('Enter desirable length of a string');

    if (maxLength < 3) {
        return (str.slice(0, maxLength));
    } else if (str.length > maxLength) {
        return `${str.slice(0, maxLength-3)}...`;   //є нюанси, якщо maxlength < 3, тому додала ще одну умову зверху
    } else {
        return str;
    }
}

console.log(cutString());


// 4. Напишіть функцію checkWord(str, word), яка приймає рядок str і слово word.
// Функція має повернути true, якщо слово знаходиться у рядку, інакше повернути false.

const checkWord = (str, word = 'word') => { // не зовсім зрозуміла умову, чи питає слово у юзера чи задає значення змінній через prompt всередині функції, вирішила зробити так
    str = prompt('Write anything');
    
    return str.includes(word) ? true : false;
    
}

// const checkWord = (str, word) => { // інший варіант
//     str = prompt('Write anything');
//     word = prompt('Enter a word');
    
//     return str.includes(word) ? true : false;
// }

console.log(checkWord())
