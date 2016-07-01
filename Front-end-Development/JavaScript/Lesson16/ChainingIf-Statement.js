
function testSize(num) {
  // Only change code below this line
  if(num<5)
    return "Tiny";
  else if(num>4 && num<9)
    return "Small";
  else if(num>9 && num<15)
    return "Medium";
  else if(num>14 && num<=17)
    return "Large";
  else if(num>17 && num < 26)
    return "Huge";
  else
      return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
