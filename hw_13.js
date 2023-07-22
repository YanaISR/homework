// ДЗ 13. Перетворення рядка в масив

// Напишіть функцію, щоб розділити рядок і перетворити його на масив слів.

// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const getWordsArray = (string) => {
    console.log( string.split(' '));
}

getWordsArray("Robin Singh");
getWordsArray("I love arrays they are my favorite");