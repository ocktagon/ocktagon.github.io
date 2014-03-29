// I worked on this challenge [by myself]

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue mission
// down x2
// right x1
// up x2
// rightx2
// downx1
// Attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the mushroom
// Upx1
// Get the mushroom and come back
// Upx1
// Attack
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


// Drink me
// rightx1
// Attack
// right
// down
// up
// right
// Attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Taunt the guards
// right
// bust door 
// rightx1
// say Taunt
// leftx2
// say attack!
// rightx1
// say follow me
// rightx2
// Upx1rightx1


this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

//Break the prison
// break out William
// skip Krogg
//break out Lucas
// skip brack or gort
// break out if marcus or robert
// skip the other marcus
// break out gordon

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Lucas")
    return true;  
if(name == "Brack" || name =="Gort")
    return false;
if(name == "Marcus" || name =="Robert")
    return true;
if(name == "Marcus")
    return false;
if(name == "Gordon")
    return true;


//Taunt
//Taunt 4 times

this.say("Yo");
this.say("Get");
this.say("Over");
this.say("Here");

//Cowardly Taunt
//Go to a close but safe spot
//Taunt
//Run to safe place

this.moveXY(56, 33);
this.say("Yo Yo Yo");
this.moveXY(70, 10);  


// Commanding Followers
// Move to crew
// Say hi to crew
// Say follow me command
// move to relatively safe place
// Command Attack
// Fall back to safer place


this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say("Follow me!");
this.moveXY(61, 43);
this.say("attack!!!");
this.moveXY(76,64);


// Mobile Artillery
// Move near first group
// attackx1
// Move near 2nd group
// attackx2
// move near 3rd group
// attackx2

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

this.moveXY(21,65);
this.attackXY(46,65);
this.attackXY(38,61);

this.moveXY(40,56);
this.attackXY(66,56);
this.attackXY(61,56);


// Q: What is this referring to? Think programming-wise rather than in the terms of the game.
// this refers to hero character Thorin, and it's significant as Thorin is represented as an object which may have attributes or could have methods called. 


// What does the () do in JavaScript?
// It allows for parameters to be passed on when handling functions/methods

// What is the point of the semicolons?
// Semicolons are sometimes used to separate lines of code, but actually are optional in some cases to use in javascript.  They are required when two or more statements are on the same line, but optional when statements are separated by line breaks. 


// Reflection:
// I have to say the code combat site is pretty amazing.  Wish there were fun tools like this when I first learned to program.
// The site gives an easy walkthrough of punching in commands, but doesn't really provide a bigger view of what things really mean.  
// In the challenge, the pseudo code steps were extremely tedious and really wanted to skip them, but I get the value of doing it.
// Trick #1 - the command + / shortcut saved my day.  
// Trick #2 - clone to git is amazing and so easy once you learn it!  Very happy to learn that. 


