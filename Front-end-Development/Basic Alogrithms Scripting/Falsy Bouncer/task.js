function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, Nan, false, 9, ""]);