function findLongestWord(str) {
    str = str.split(' ');
    var maxlength = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > maxlength)
            maxlength = str[i].length;
    }
    return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");