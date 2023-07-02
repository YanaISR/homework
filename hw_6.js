// ДЗ 6. Практика з функціями

// 1. Написати функцію maxNumber(a, b), яка отримує два числа, то повертає більший з них.

function maxNumber(a,b) {
    a = +prompt('Enter a number');
    b = +prompt('Enter an another number');

    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return 'They are equal'
    }
}

console.log(maxNumber());



// 2. Написати функцію checkAge(age), яка отримую вік користувача і якщо йому меньше 18, тоді повертати false, інакше - true

function checkAge(age) {
    age = +prompt('How old are you?');
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}

console.log(checkAge());

// 3. Переписати  “ДЗ 4. Усічення рядка” на окрему функцію.

// Можете залишити prompt, або отримувати параметри, як аргумент.

function cutString(str, maxLength) {
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

function checkWord(str, word = 'word') { // не зовсім зрозуміла умову, чи питає слово у юзера чи задає значення змінній через prompt всередині функції, вирішила зробити так
    str = prompt('Write anything');
    
    if (str.includes(word)) {
        return true;
    } else {
        return false;
    }
}

// function checkWord(str, word) { // інший варіант
//     str = prompt('Write anything');
//     word = prompt('Enter a word');
    
//     if (str.includes(word)) {
//         return true;
//     } else {
//         return false;
//     }
// }



console.log(checkWord())
