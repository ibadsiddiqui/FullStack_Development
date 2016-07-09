var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

//example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;

// only change the code below this line
var expression = /and/gi; // change this line

//this code counts the matches of the expression in testtrings.

var andCount = testString.match(expression).length;