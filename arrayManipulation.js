function processArray(Tableau) {
  let newTableau = Tableau.map((nombre) => {
    if (nombre % 2 === 0) {
      return Math.pow(nombre, 2);
    } else {
      return nombre * 3;
    }
  });
  return newTableau;
}

let numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers)); // outputs: [3,4,9,16,15]
