// Попробуйте сохранить метод grow во внешнем от объекта контесте и вызвать его с другими растениями при помощи bind или apply.

function grow() {
    this.height += 30;
    this.year += 1;
  }
  
  const oak = {
    height: 140,
    year: 2025
  };
  
  const pine = {
    height: 100,
    year: 2023
  };

  const oakGrow = grow.bind(oak);
  const pineGrow = grow.bind(pine);
  

  for (let i = 0; i < 5; i++) {
    oakGrow();
    pineGrow();
  }
  
  console.log(`Дуб — год: ${oak.year}, высота: ${oak.height} см`);
  console.log(`Сосна — год: ${pine.year}, высота: ${pine.height} см`);
  