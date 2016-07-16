function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    str = str.split('');
    for (var i = 0; i < str.length; i++)
        if (str[i] === target)
            return true;

    return false;
}

confirmEnding("Bastian", "n");