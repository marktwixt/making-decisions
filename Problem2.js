var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge > brittanisAge) {
  console.log("Amy is older");
} else if (amysAge === brittanisAge) {
  console.log("They are the same age");
} else {
  console.log("Brittany is older");
}