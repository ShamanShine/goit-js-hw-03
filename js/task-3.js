function filterArray(numbers, value) {
  const emptyMass = [];
  for (let i = 0; numbers.length >= i; i++) {
    //циклом сделаем итерацию в массиве
    if (numbers[i] > value) {
      emptyMass.push(numbers[i]); // если число больше value - добавляем его в пустой массив
    }
  }
  return emptyMass;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
