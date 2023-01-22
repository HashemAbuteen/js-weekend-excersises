function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }

  console.log(findNextSquare(121)); 
  console.log(findNextSquare(625)); 
  console.log(findNextSquare(3)); 
  