function titleCase(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++)
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
    str = str.join(' ');
    return str;
}

titleCase("sHoRt AnD sToUt");