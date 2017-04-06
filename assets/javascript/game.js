//Define variables

var wordOptionsArray = ["Kawhi Leonard", "Dwight Howard", "Dominique Wilkins", "Reggie Miller", "Ray Allen", "Bob Pettit", "Kevin McHale", "George Gervin", "Gary Payton", "Elvin Hayes", "Dolph Schayes", "Rick Berry", "Paul Pierce", "George Mikan", "Bob Cousy", "Isiah Thomas", "Allen Iverson", "John Havlicek", "Walt Frazier", "Patrick Ewing", "Clyde Drexler", "Jason Kidd", "Steve Nash", "David Robinson", "Elgin Baylor", "Dwyane Wade", "Kevin Durant", "John Stockton", "Scottie Pippen", "Chris Paul", "Charles Barkley", "Stephen Curry", "Julius Erving", "Dirk Nowitzski", "Karl Malone", "Kevin Garnett", "Moses Malone", "Jerry West", "Oscar Robertson", "Hakeem Olajuwon", "Kobe Bryant", "Shaquille O'Neal", "Larry Bird", "Tim Duncan", "Bill Russell", "Kareem Abdul-Jabbar", "Magic Johnson", "Wilt Chamberlain", "LeBron James", "Michael Jordan"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctGuessArray = [];
var incorrectGuessArray = [];
var guesses = 10;
var wins = 0;
var losses = 0;
var computerGuess = wordOptionsArray[Math.floor(Math.random() * wordOptionsArray.length)];
computerGuess = computerGuess.toLowerCase();
var lettersArray = computerGuess.split("");
var startingLetters = "_".repeat(computerGuess.length);
var startingLettersArray = startingLetters.split("");


console.log(lettersArray);


//Begin function on key release
document.onkeyup = function(event) {

	//user guess
	var userGuess = event.key;


	//if user guess is in alphabet
	if(alphabet.indexOf(userGuess) >= 0) {
		//if user guess is part of computer answer
		if(lettersArray.indexOf(userGuess) >= 0) {
				//if user guess has not already been guessed, just continue
				if(correctGuessArray.indexOf(userGuess) >= 0) {
					return true;
				//if user guess has not already been guessed, push value in array
				} else {
					correctGuessArray.push(userGuess);
				}
		//if user guess is not part of the correct answer
		} else {
				//also if it has not already been guessed incorretly just continue
				if(incorrectGuessArray.indexOf(userGuess) >= 0) {
					return true;
				//otherwise add it to array of incorrect answers and decrease guesses by one
				} else {
					incorrectGuessArray.push(userGuess) && guesses--;
				}
		}
	//only if key pressed is not in the alphabet
	} else {
		return true;
	}

	//for loop to substitute starting blanks
			for(var i =0; i < lettersArray.length; i++) {
				if(lettersArray[i] === " ") {
					startingLettersArray[i] = "\xa0\xa0\xa0";
				} else if(lettersArray[i] === userGuess) {
					startingLettersArray[i] = userGuess;
				} 
				//
				var endingLetters = startingLettersArray.join(" ");
				var incorrectGuessesEnd = incorrectGuessArray.join(" ");


			}
						
	if(guesses === 0) {
		losses++;
	}

	if(!startingLettersArray.includes("_")) {
		wins++;
	}

	var html = endingLetters.toUpperCase() + "<br><br>" +
	"<p>Letters Already Guessed: " + incorrectGuessesEnd.toUpperCase() + "</p><br>" +
	"<p>Wins: " + wins + "</p><br>" +
	"<p>Losses: " + losses + "</p><br>";


    document.querySelector("#game").innerHTML = html;	

	console.log(wins);
	console.log(losses);

};
