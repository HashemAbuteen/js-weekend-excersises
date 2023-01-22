function toCamelCase(str) {
    if (!str) {
      return "";
    }
    let words = [], i = 0;
    for(i = 0; i < str.length; i++) {
      if(str[i] === '-' || str[i] === '_') {
        continue;
      }
      if(i === 0 || (str[i-1] === '-' || str[i-1] === '_')) {
        words.push(str[i].toUpperCase());
      } else {
        words.push(str[i]);
      }
    }
    return words.join("");
  }

  console.log(toCamelCase("the-stealth-warrior"));
  console.log(toCamelCase("The_Stealth_Warrior"));
