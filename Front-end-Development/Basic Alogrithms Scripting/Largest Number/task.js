function titleCase(str) {
    var results = [];
    for (var i = 0; i < str.length; i++) {
        var largest = 0;
        for (var j = 0; j < str.length; j++) {
            if (str[i][j] > largest) {
                largest = str[i][j];
            }
        }
        result[i] = largest;
    }
    return results;
}

titleCase([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);