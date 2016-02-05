// 1. car and car
function carCat(str) {
  return /ca(r|t)/.test(str);
}


// 2. pop and prop
function popProp(str) {
  return /pr?op/.test(str);
}

// 3. ferret, ferry, and ferrari

function ferretFerryFerrari(str) {
  // return /ferret/.test(str) && /ferry/.test(str) && /;
}

// 4. any word ending in ious

// 5. any whitespace character followed by a dot, comma, colon, or semicolon

// 6. any word longer than six letters

// 7. any word without the letter e

// car cat test
var testString = "car1";
var testString2 = "carcat";
var testString3 = "cat1231231312309";

console.log(carCat(testString));
console.log(carCat(testString2));
console.log(carCat(testString3));

var testString4 = "popprop";
var testString5 = "pooooprop";
var testString6 = "pop";

console.log(popProp(testString4));
console.log(popProp(testString5));
console.log(popProp(testString6));
