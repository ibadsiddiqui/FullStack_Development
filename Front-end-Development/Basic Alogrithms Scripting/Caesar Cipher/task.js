function rot13(str) { // LBH QVQ VG!

    var newStr = [];
    for (var i = 0; i < str.length; i++) {
        newStr[i] = str.charCodeAt(i);
        if (newStr[i] >= 78 && newStr[i] <= 90)
            newStr[i] -= 13;
        else if (newStr[i] <= 77 && newStr[i] > 64)
            newStr[i] += 13;
        newStr[i] = String.fromCharCode(newStr[i]);
    }
    return newStr.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");