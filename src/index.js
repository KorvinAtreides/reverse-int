module.exports = function reverse(n) {
    let arr = String(n).split("");
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != "-") {
            arr2.unshift(arr[i]);
        }
    }
    return Number(arr2.join(""));
};
