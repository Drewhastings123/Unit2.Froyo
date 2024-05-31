//Prompt user for froyo flavors
const userInputString = prompt(
  "Please enter a list of Froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
//split the input into a string array
const stringArray = userInputString.split(",");
// console.log(stringArray);
let inputFlavors = {};
const flavorCount = (flavor) => {
  let flavors = {};
  for (let i = 0; i < stringArray.length; i++) {
    const num = stringArray[i];
    if (!(num in flavors)) {
      flavors[num] = 1;
    } else {
      flavors[num] += 1;
    }
  }
  return flavors;
};
inputFlavors = flavorCount(stringArray);
console.table(flavorCount(stringArray));
