function longestDistinctLetters(s1, s2) {
    let result = "";
    for (let i = 0; i < s1.length; i++) {
        if (!result.includes(s1[i])) {
            result += s1[i];
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (!result.includes(s2[i])) {
            result += s2[i];
        }
    }
    return result.split("").sort().join("");
}

console.log(longestDistinctLetters("hello", "world")); 
console.log(longestDistinctLetters("abcdefg", "hijklmnop")); 
console.log(longestDistinctLetters("abcdefg", "abcdefg")); 
