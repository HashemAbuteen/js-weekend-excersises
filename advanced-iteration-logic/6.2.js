function countNonUniqueChars(str) {
    let charCount = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        charCount[str[i].toLowerCase()] = charCount[str[i].toLowerCase()] + 1 || 1;
    }
    for (let key in charCount) {
        if (charCount[key] > 1) {
            count += 1;
        }
    }
    return count;
}

console.log(countNonUniqueChars("Hello World")); 
console.log(countNonUniqueChars("AbCdEfG")); 
console.log(countNonUniqueChars("Aabbcde")); 
