// -------------------------------------------------------------  Daily Fronted Problem  -----------------------------------------------------

//                                                                 Problem #1      (asked by Amazon)
// Please implement your own Array.prototype.map().
// Example: [1,2,3].myMap(num => num * 2) // [2,4,6]
// Note: Do not use native Array.prototype.map() in your code

const myArr = [1,2,3];
const myArr2 = [1,4,9,16];

// ----------------------------------------- using forEach() method --------------------------------------
// one option with creating an empty array and later using push add new elements.
const newArr = [];
myArr.forEach(numb => newArr.push(numb * 2))
console.log(newArr);

// another one simply log to the console elements one by one with a new value based on operations that has been done to each element in the origin array 
const res = myArr.forEach(element => console.log(element * 2));

// create reusable function
const result = array => {
    let newArray = [];
    array.forEach(item => newArray.push(item * 2 ));
    console.log(newArray);
}

result(myArr2);

// -------------------------------------------using for...of() method ---------------------------

for (let item of myArr) {
    console.log(item * 2);
}
//                                                                    Problem #2  (asked by Apple.)

// Array.prototype.reduce() is a handy method to process arrays.
// Could you implement it by yourself?
// [1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
// [1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
// Note
// 1.	Do not use native Array.prototype.reduce() in your code
// 2.	your function is only tested against valid array (no array-like objects)

                           

const someArr = [1,2,3];

let val = 4;
for (let cur of someArr) {
    val += cur;
}

// console.log(val);


//                                                                    Problem #3   (asked by ByteDance)

// Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.
// Examples
// [-2].square(); // [4]
// [1, 2, 3, 4].square(); // [1, 4, 9, 16]
// Notes
// •	The original array should not be modified.
// •	Assume that the array only contains numbers.

const newSquareArray = [];

const intoSquares = arr => {
    for (let item of arr) {
        newSquareArray.push(item ** 2);
    }
    console.log(newSquareArray);
}

intoSquares([1,2,3,4])
