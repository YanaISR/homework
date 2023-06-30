// ДЗ 4. Усічення рядка

//   Створіть скрипт, який буде запитувати у користувача довільний рядок та максимальну довжину рядку ( це має бути два prompt)

let str = prompt('Write something');
const maxLength = prompt('Enter desirable length of a string');

//   Далі перевіряйте довжину рядка str і, якщо вона перевершує maxlength, замінює кінець str на "…", так, щоб її довжина дорівнювала maxlength.

if (maxLength < 3) {
    console.log(str.slice(0, maxLength));
} else if (str.length > maxLength) {
    const res = str.slice(0, maxLength-3) + '...';   //є нюанси, якщо maxlength < 3, тому додала ще одну умову зверху
    console.log(res);
} else {
    console.log(str);
}

//   Результатом функції має бути той самий рядок, якщо усічення не потрібно, або, якщо необхідно, усічений рядок.



