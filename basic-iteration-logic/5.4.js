function toWeirdCase(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += i % 2 == 0 ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    return result;
}

console.log(toWeirdCase("String")); 
console.log(toWeirdCase("Weird string case")); 
