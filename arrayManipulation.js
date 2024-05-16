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

function formatArrayStrings(TableofLetter, Tableofnumber) {
  if (TableofLetter.length !== Tableofnumber.length) {
    throw new Error("make sure that the both arrays are same size please!");
  }
  return TableofLetter.map((str, index) => {
    const nombre = Tableofnumber[index];
    if (nombre % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
