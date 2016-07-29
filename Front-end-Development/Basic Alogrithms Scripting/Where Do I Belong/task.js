function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var arr1 = arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr1.length; i++)
        if (arr1[i] === num)
            return i;
    arr1.push(num);
    arr1 = arr1.sort(function(a, b) {
        return a - b;
    });
    return arr1.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);