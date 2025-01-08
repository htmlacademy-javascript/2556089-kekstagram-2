//Функция для проверки длины строки//
const checkMaxLengthString = (string = '', maxLenght = 1) => string.length <= maxLenght;
checkMaxLengthString ('Тест', 5);

//Функция для проверки, является ли строка палиндромом//
const isPalindrome = (string) => {
  string = string.replaceAll (' ', '').toLowerCase();
  let checkedString = '';

  for (let i = string.length - 1; i >= 0; i--){
    checkedString += string [i];
  }
  return string === checkedString;
};

isPalindrome ('Лёша на полке клопа нашёл ');
