// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const updatedCars = cars.map(car =>
  car.isDiesel
    ? { brand: "Tesla", price: 25000, isDiesel: false }
    : car
);

console.log(updatedCars);
