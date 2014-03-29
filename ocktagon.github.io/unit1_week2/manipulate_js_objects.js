// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

CREATE empty object variable called "adam"

2. Give adam a name property with the value "Adam".

ADD property name: "Adam" to adam object

3. Add a spouse property to terah and assign it the value of adam.

ADD property spouse: adam to terah object

4. Change the value of the terah weight property to 125.

CHANGE terah, weight property to 125

5. Remove the eyeColor property from terah.

DELETE eyeColor property from terah object

6. Add a spouse property to adam and assign it the value of terah.

ADD spouse property to adam object, assign value terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

ADD object children with no properties to terah object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

ADD property carson: name "Carson" to terah children property

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

ADD property carter: name "Carter" to terah children property

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

ADD property colton: name "Colton" to terah children property

11. Add a children property to adam and assign it the value of terah children.

Add children property, assign value of terah children to dam object

*/

// __________________________________________
// Write your code below.

var adam = {};

adam.name = "Adam";

terah.spouse = adam;

terah.weight = 125;

delete terah.eyeColor;

adam.spouse = terah;

terah.children = {};

terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};

adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// 1.  Learning how pointers to variables worked was very helpful (i.e. spouse = adam)
// 2. Wasn't sure how to delete properties, but found on the web that you can use a delete command, like how you would work with a database record.  
// 3. Nesting was very interesting to learn, tried to make it as simple as possible... but wondering if there's any more efficient way to do it. 
// 
// 


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
