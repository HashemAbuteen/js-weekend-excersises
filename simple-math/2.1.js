function sumOfTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b) {
      return a - b;
    });
    return numbers[0] + numbers[1];
  }

  console.log(sumOfTwoSmallestNumbers([19, 5, 42, 2, 77])); 
  console.log(sumOfTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
  