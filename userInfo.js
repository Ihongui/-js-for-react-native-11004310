const { processArray, formatArrayStrings } = require("./arrayManipulation");

let id = 1;

function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    throw new Error("The two arrays must have the same length!");
  }

  return originalNames.map((originalName, index) => {
    return {
      id: id++,
      originalName: originalName,
      modifiedName: modifiedNames[index],
    };
  });
}

const noms = ["KOFI", "KWAGO", "ABENA", "addo", "EKUA"];
const nombres = [45, 41, 59, 60, 100];

const processedNumbers = processArray(nombres);
const modifiedNames = formatArrayStrings(noms, processedNumbers);
const userProfiles = createUserProfiles(noms, modifiedNames);

console.log(processedNumbers);
console.log(modifiedNames);
console.log(userProfiles);
