alert(`Hello, Viewer! Let's get started!`);
console.log('ДЗ 1. Явне перетворення типів');

// Exercise 1.  Треба конвертувати у string наступні значення: true, 1000, null, undefined

const str1 = String(true); // or add ''
const str2 = '1000';       // or use String() method
const str3 = String(null);
const str4 = undefined;

// як альтернатива можна було записати значення у змінну і створити іншу змінну для конвертації P.S. мені було лінь) або записати значення у змінну, а методи добавити у консоль.

console.log(str1);
console.log(str2);
console.log(str3);
console.log(String(str4));

// Exercise 2.  Треба конвертувати у number наступні значення: “123a”, “1000”, null, undefined, false

const num1 = parseInt('123a');
const num2 = Number('1000');  // const num2 = +'1000';
const num3 = +null;  // const num3 = Number(null);
const num4 = +undefined; // or Number() method  -- gives NaN, of which typeof is a NUMBER
const num5 = Number(false);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

// Exercise 3.  Треба конвертувати у boolean наступні значення: null, undefined, “”, 0, “ “, 1000, “1200”

const isBoolean1 = Boolean(null);
const isBoolean2 = Boolean(undefined);
const isBoolean3 = Boolean('');
const isBoolean4 = Boolean(0);
const isBoolean5 = Boolean(' ');
const isBoolean6 = Boolean(1000);
const isBoolean7 = Boolean('1200');

console.log(isBoolean1);
console.log(isBoolean2);
console.log(isBoolean3);
console.log(isBoolean4);
console.log(isBoolean5);
console.log(isBoolean6);
console.log(isBoolean7);


