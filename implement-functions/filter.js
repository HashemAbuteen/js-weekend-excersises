function filter(arr, callback) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

let myArr = [1, 2, 3, 4, 5, 6];
let filteredArr = filter(myArr, function(element) {
    return element % 2 === 0;
});
console.log(filteredArr); // [2, 4, 6]
