function isIsogram(str) {
    let strLower = str.toLowerCase();
    let charCount = {};
    for (let i = 0; i < strLower.length; i++) {
        if (charCount[strLower[i]]) {
            return false;
        } else {
            charCount[strLower[i]] = true;
        }
    }
    return true;
}

console.log(isIsogram("isogram"));  // true
console.log(isIsogram("word"));  // true
console.log(isIsogram("Giraffe"));  // false
console.log(isIsogram(""));  // true
