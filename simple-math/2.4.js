function findUniq(arr) {
    let uniq = arr[0];
    if(uniq!==arr[1]){
        uniq = arr[2];
    }
    for (let i = 0; i < arr.length; i++) {
      if (uniq === arr[i]) {
        continue;
      } else {
        return arr[i];
      }
    }
  }

console.log(findUniq([0,1,1,1,1]));