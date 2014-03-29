// I paired [by myself] on this challenge.




// Pseudocode
// secretNumber equals 7
// password equals a string called "just open the door"
// allowedIn should be boolean value false
// members should be an array that contains John as first and Mary as 4th element



// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Tom", "Aki", "Mary"]




// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// I thought this generally looked good.  Since it was obvious that it was a number, I shortened the variable name
var secretNum = 7
// Password as a var name was too generic so i made it applicable to the member scenario
var memberPW = "just open the door"
// This one felt weird as a boolean question so i framed the var as a validation question instead
var isAllowed = false
// members felt too generic so I added some context at the end while keeping it plural to indicate an array
var membersList = ["John", "Tom", "Aki", "Mary"]

// with the new variables, I could also choose to flatten them into one expression
{var secretNum = 7; var memberPW = "just open the door"; var isAllowed = false; var membersList = ["John", "Tom", "Aki", "Mary"]}



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// Framing the pseudocode was a bit confusing to me at first as they can look so similar to user stories. 
// I've internalized it in my head that user stories most importantly provide context and don't have to be mapped to code expressions line-by-line, but pseudocode can be looked at as tiny nibble size user stories that where best practice is to have each line of pseudo code translatable to an equivalent code experssion. 

// Refactoring was another point of interest for me.  In the DRY concept, minimal duplication and avoiding waste were big concepts, and the 7+1 tips for naming variables was also possible.  
// I can see the beauty in providing context to people unfamiliar with your code in the most efficient way. 
// 

