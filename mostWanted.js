"use strict"

//allow user to search based on a single criteria, male or female
function app(people){
	let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
	let searchResults;
	switch(searchType){
	  case 'yes':
		searchResults = searchByName(people);
		break;
	  case 'no':
		// TODO: search by traits
		break;
		default:
	  app(people); // restart app
		break;
	}
	mainMenu(searchResults, people);
}

function mainMenu(person, people){
  
	if(!person){
		alert("Could not find that individual.");
		return app(people); // restart
	  }
	
	  
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
	case "info":
	// TODO: get person's info
	break;
	case "family":
	// TODO: get person's family
	break;
	case "descendants":
	// TODO: get person's descendants
	break;
	case "restart":
	app(people); // restart
	break;
	case "quit":
	return; // stop execution
	default:
	return mainMenu(person, people); // ask again
  }

//allow user to search for multiple traits like gender, height, weight, eye color and occupation
function searchByName(people){
	let firstName = prompt("What is the person's first name?").toLowerCase();
	let lastName = prompt("What is the person's last name?").toLowerCase();
	
	// add .toLowerCase()
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
		return true;
	  }
	  else{
		return false;
	  }
	})
	// TODO: find the person single person object using the name they entered.
	return foundPerson;
  }


function searchByEyeColor(){
	let eyeColor = prompt("What is the person's eye color?");
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.eyeColor === eyeColor){
		return true;
	  }
	  else{
		return false;
	  }
	})
	// TODO: find the person single person object using the name they entered.
	return foundPerson;
}

function searchByHairColor(people){
	let hairColor = prompt("What is the person's hair color?");
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.hairColor === hairColor){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundPerson;
  }

  function searchByWeight(people){
	let weight = prompt("What is the person's weight?");
  
	let foundEyeColor = people.filter(function(potentialMatch){
	  if(potentialMatch.weight === weight){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundPerson;
  }

  function searchByHeight(people){
	let height = prompt("What is the person's height?");
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.height === height){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundPerson;
  }

  function searchByGender(people){
	let personsGender = prompt("What is the person's gender?");
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.male === male && potentialMatch.female === female){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundPerson;
  }




function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}


function autoValid(input){
	return true; // default validation only
  }
