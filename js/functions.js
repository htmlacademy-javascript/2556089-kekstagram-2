
/*

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
*/
//-----------------------------------------------------------------------------------------------------------------------------
/*
Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.

'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/

/*
имяФункции('08:00', '17:30', '14:00', 90); // true
имяФункции('8:0', '10:0', '8:0', 120); // true
имяФункции('08:00', '14:30', '14:00', 90); // false
имяФункции('14:00', '17:30', '08:0', 90); // false
имяФункции('8:00', '17:30', '08:00', 900); // false
*/

const convertTimeToMinutes = (timeInNormalFormat) => {

  const [hours, minutes] = timeInNormalFormat.split(':').map(Number);
  return (hours * 60 + minutes);
};

const isTimeAvailable = (startWorkingDay, endWorkingDay, startMeeting, durationMeeting) => {

  const StartWorkingDayinMinutes = convertTimeToMinutes (startWorkingDay);
  //console.log (StartWorkingDayinMinutes);

  const EndWorkingDayinMinutes = convertTimeToMinutes (endWorkingDay);
  //console.log (EndWorkingDayinMinutes);

  const StartMeetingInMinutes = convertTimeToMinutes (startMeeting);
  //console.log (StartMeetingInMinutes);

  if (StartMeetingInMinutes > EndWorkingDayinMinutes || StartMeetingInMinutes < StartWorkingDayinMinutes) {
    return false;
  }

  if (StartMeetingInMinutes + durationMeeting > EndWorkingDayinMinutes) {
    return false;
  } else {
    return true;
  }
};

console.log (isTimeAvailable('08:00', '17:30', '14:00', 90)); // true
console.log (isTimeAvailable('8:0', '10:0', '8:0', 120)); // true
console.log (isTimeAvailable('08:00', '14:30', '14:00', 90)); // false
console.log (isTimeAvailable('14:00', '17:30', '08:0', 90)); // false
console.log (isTimeAvailable('8:00', '17:30', '08:00', 900)); // false


