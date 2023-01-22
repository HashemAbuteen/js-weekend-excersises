function shortestWord(string) {
    let words = string.split(" ");
    let minLength = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < minLength) {
            minLength = words[i].length;
        }
    }
    return minLength;
}

console.log(shortestWord("This is a simple sentence")); 
console.log(shortestWord("A short sentence")); 
console.log(shortestWord("A very very very long sentence")); 
