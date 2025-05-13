// {name: "Bob"} --> {"Bob": "name"}
// (вам понадобится поработать с Object.values, Object.keys )

function invertObject(obj) {
    const inverted = {};
  
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      inverted[value] = key;
    });
  
    return inverted;
  }
  

  const original = { name: "Bob" };
  const result = invertObject(original);
  console.log(result);
  