// I worked [by myself] on this challenge

// Your mission description:
// My guess at a skeleton for the app.  I think this is how it would possibly be structured, not knowing what's under the hood
// I've tried to expand the game's character so he has weapons, armor etc.
// 

// Pseudocode
// 1. Create a code_combat app as global object
//    Put 1-2 environment variables in there
// 2. Create local variable called hero, who has a few moves
// 
// 

// Initial Code

code_combat = { //intentionally global since this is for the app.  I think this was a best practice in the good things about JS book
	appTitle: "Code Combat";
	appAuthor: "Aki Suzuki";
	appCredits: "Aki Suzuki, Co";
	appDate: "March 2014";
	//Common functions?
	login {
		// I would assume some functions to login to app would be here
	}
	logout{
		// logout code
	}
	accounts{
		//place to write code for user accounts/membership?
	}
}

var hero = {
	heroName: "Hercules";
	heroOwner: "Aki Suzuki";
	heroWeapon: "Battle Axe";
	heroArmor: "Steel Shield";
	var movedown {
		//move down code
	}
	var moveup {
		//move up code
	}
	var moveleft {
		//move up code
	}	
	var moveright {
		//move up code
	}
	var dance {
		// dancing command for hero
	}
	var attack {
		//attack with axe
	}
	var defend {
		//defend with shield
	}
}

// Refactored Code
Not really any way to refactor





// Reflection
// I didn't really understand this exercise since it was too open-ended.
// I decided to use this as an opportunity to use my imagination of how the app would be constructed if I did it from scratch.
// I 'think' there would be tons of objects... the app itself would be a global object, the hero would be an object, the stages would be an object etc. 
// It made me realize how vast a coding effort for this would be... I guess one day we'll be writing hundreds of lines of code for an app like this!
// 
// 
