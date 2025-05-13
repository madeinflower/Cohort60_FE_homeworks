// Повысьте цену всех машин в массиве на 20%.

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];


const updatedCars = cars.map(car => ({
  ...car,
  price: Math.round(car.price * 1.2)
}));

console.log(updatedCars);
