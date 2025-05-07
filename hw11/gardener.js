// Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.
//Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
// Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.
// Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾


function gardener(operation, item) {
    operation(item);
  }
  
  function waterPlant(plant) {
    console.log("I water this " + plant);
  }

  gardener(waterPlant, 'rose');


function trimPlant(plant) {
    console.log("I trim this " + plant);
  }
  
  function plantSeed(seed) {
    console.log("I plant this " + seed);
  }

  function fertilizePlant(plant) {
    console.log("I fertilize this " + plant);
  }

  gardener(trimPlant, 'bush');
  gardener(plantSeed, 'sunflower');
  gardener(fertilizePlant, 'tree');
  
  