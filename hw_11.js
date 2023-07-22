// ДЗ 11. Нумерація рядків

// Напишіть функцію, яка приймає список рядків і повертає кожен рядок, перед яким стоїть правильне число.
// Нумерація починається з 1. Зверніть увагу на двокрапку та пробіл між ними.


// const orderedArray = (array) => {
//     const newArray = [];
//     array.forEach((element, index) => {
//         newArray.push(`${index+1}: ${element}`);
//     });
//     console.log(newArray)
// }

const orderedArray = (array) => {
    const res = (array.map((item, index) => (`${index + 1}: ${item}`)));
    console.log(res);
}

orderedArray(["a", "b", "c"]);
orderedArray([]);

