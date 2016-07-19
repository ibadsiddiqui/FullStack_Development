function monkeyChunkey(str, size) {
    var newStr = [];
    str = str.slice();
    var len = str.length();
    for (var i = 0; i < len; i += size) {
        newStr.push(str.slice(0, size));
        str = str.slice(size);
    }
    return newStr;
}

monkeyChunkey(["a", "b", "c", "d"], 2);