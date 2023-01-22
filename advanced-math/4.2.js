function tribonacci(signature, n) {
    if (n === 0) {
      return [];
    }
    if (n === 1) {
      return [signature[0]];
    }
    if (n === 2) {
      return [signature[0], signature[1]];
    }
    let sequence = signature;
    for (let i = 3; i < n; i++) {
      let next = sequence[i - 3] + sequence[i - 2] + sequence[i - 1];
      sequence.push(next);
    }
    return sequence;
  }
console.log(tribonacci([1, 1, 1], 10)); // Output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([0, 0, 1], 10)); // Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  