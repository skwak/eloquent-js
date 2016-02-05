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


// quoting style
// Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue.
// Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes
// used in contractions like aren't.
// Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace
// method that does the proper replacement.
function replaceQuotesSometimes(str) {
  console.log(str.replace(/(^|\W)'|'($|\W)/g, '$1"$2'));
}

var string = "'oh my goodness,' she cried out, 'why didn't I buy groceries today?'";
replaceQuotesSometimes(string);
