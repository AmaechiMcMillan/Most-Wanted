"use strict"

//allow user to search based on a single criteria, male or female
function app(people){
	let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
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

//allow user to search for multiple traits like gender, height, weight, eye color and occupation
function searchByName(people){
	let firstName = promptFor("What is the person's first name?", autoValid).toLowerCase();
	let lastName = promptFor("What is the person's last name?", autoValid).toLowerCase();
	
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
	let eyeColor = promptFor("What is the person's eye color?", autoValid);
  
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
	let hairColor = promptFor("What is the person's hair color?", autoValid);
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.hairColor === hairColor){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundHairColor;
  }

  function searchByWeight(people){
	let weight = promptFor("What is the person's weight?", autoValid);
  
	let foundEyeColor = people.filter(function(potentialMatch){
	  if(potentialMatch.weight === weight){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundEyeColor;
  }

  function searchByHeight(people){
	let height = promptFor("What is the person's height?", autoValid);
  
	let foundPerson = people.filter(function(potentialMatch){
	  if(potentialMatch.height === height){
		return true;
	  }
	  else{
		return false;
	  }
	})
	return foundHairColor;
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
