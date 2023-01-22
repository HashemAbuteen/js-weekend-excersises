function map(arr, callback) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i], i, arr));
    }
    return mappedArr;
}

let myArr = [1, 2, 3, 4, 5, 6];
let mappedArr = map(myArr, function(element) {
    return element * 2;
});
console.log(mappedArr); // [2, 4, 6, 8, 10, 12]
