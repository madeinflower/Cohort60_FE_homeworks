// Объявите две переменные с разными именами и присвойте им значения: количество котов (какое-то число) "Я не кошатник"
// В случае если количество котов равно нулю, должна выводиться фраза из второй переменной.
// Выведите значения переменных в консоль.

let numberOfCats = 0;
let noCatsMessage = "Я не кошатник";

if (numberOfCats === 0) {
  console.log(noCatsMessage);
} else {
  console.log(`Количество котов: ${numberOfCats}`);
}

console.log("numberOfCats:", numberOfCats);
console.log("noCatsMessage:", noCatsMessage);
