function reverseString(str) {
    str = str.split('');
    str = str.reverse(function(a, b) {
        return b - a;
    });
    str = str.join('');
    return str;
}

reverseString("hello");