function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

let myArr = [1, 2, 3, 4, 5, 6];
forEach(myArr, function(element, index) {
    console.log(element, index);
});
