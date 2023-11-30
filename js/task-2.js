function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message; //если длина строки равна или  меньше -возвращаеться исходная строка без изменений
  } else {
    let formatMessage = message.slice(0, maxLength) + '...'; //если длина превышает, то обрезаем стоку и добавляем троеточие + возвращаем обрезаную версию
    return formatMessage;
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
