// Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. 
// Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.
// Исходный массив должен остаться неизменным.
// Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]


function addPrefixToWords(wordsArray, prefix) {
    return wordsArray.map(word => prefix + word);
  }

  const originalArray = ["apple", "orange"];
  const result = addPrefixToWords(originalArray, "pine");
  
  console.log("Оригинальный массив:", originalArray);
  console.log("Результат:", result);
  