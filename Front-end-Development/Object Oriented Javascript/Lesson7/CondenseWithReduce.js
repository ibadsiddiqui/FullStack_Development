var array = [1, 2, 3];
var singleVal = 0;
singleVal = array.reduce(function(prev, curr) {
    return prev + curr;
})