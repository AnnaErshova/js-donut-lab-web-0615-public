//JS Donut Counter Lab

// declare 2 variables one for guests and one for donuts
// use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
// use parseInt to convert the users answer from a string to an integer.
// The parseInt() function parses a string and returns an integer.
// parseInt(15) => 15

// write a conditional to check if there are enough donuts -- assign 1 guest to 1 donut

// alert the user a message telling them the numbers of donuts and guests and if there are enough or not.

  var guests = prompt("How many guests are there?");
  var donuts = prompt("How many donuts are there?");
  if (guests>=donuts){
    return("There are" + " " + guests + " " + "guests and" + " " + donuts + " " + "donuts, there are enough donuts if 1 guest eats no more than 1 donut");
  } else {
    return("There are" + " " + guests + " " + "guests and" + " " + donuts + " " + "donuts, there are NOT enough donuts if 1 guest eats at least 1 donut");
  };

