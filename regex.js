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
  return /ferr(e|y|a)t?(ri)?/.test(str);
}

// 4. any word ending in ious
function ious(str) {
  return /.(ious)/.test(str);
}

// 5. any whitespace character followed by a dot, comma, colon, or semicolon
function whiteSpacePunctuation(str) {
  return /\s(\.|,|;)/.test(str);
}

// 6. any word longer than six letters
function longerThanSixLetters(str) {
  return /\w{7,}/.test(str);
}

// 7. any word without the letter e
function noLetterE(str) {
  return /\b[^e\W]+\b/.test(str);
}
