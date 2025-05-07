// Создайте метод который принимает массив строк, ничего!! не возвращает. 
// Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
// ["apple", "orange"] ---> ["Apple", "orange"]

function capitalizeFirstElement(arr) {
    if (arr.length === 0 || typeof arr[0] !== 'string') return;
  
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  }

  const fruits = ["apple", "orange"];
  capitalizeFirstElement(fruits);
  console.log(fruits);
  