function truncString(str, num) {
    if (str.length > num && num >= 3)
        return str.slice(0, num - 3) + "...";
    if (str.length > num && num <= 3)
        return str.slice(0, num) + "...";

    return str;
}
truncString("The string is real", 5);