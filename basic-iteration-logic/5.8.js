function longestWord(string) {
    let words = string.split(" ");
    let maxLength = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(longestWord("This is a simple sentence")); 
console.log(longestWord("A short sentence"));
console.log(longestWord("A very very very long sentence")); 
