// Создайте метод который принимает массив и возврашает новый! массив с теми же данными, но первый и 
// последний элементы в массиве должны быть поменяны местами.
// Исходный массив должен остаться неизмененным после вызова метода.

function swapFirstAndLast(arr) {
    if (arr.length < 2) {
      return [...arr];
    }
  
    const newArr = [...arr];
    const first = newArr[0];
    const last = newArr[newArr.length - 1];
  
    newArr[0] = last;
    newArr[newArr.length - 1] = first;
  
    return newArr;
  }
  
  const original = [1, 2, 3, 4, 5];
  const swapped = swapFirstAndLast(original);
  
  console.log("Исходный:", original);
  console.log("Новый:", swapped);
  