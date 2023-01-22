function binaryToInteger(binary) {
    return parseInt(binary.join(''), 2);
  }

  console.log(binaryToInteger([0, 0, 0, 1]));
  console.log(binaryToInteger([1, 0, 1, 1])); 
  