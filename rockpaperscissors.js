function getComputerChoice() {
	// gives a random number from 0 to 2
	var randomNumber = Math.ceil(Math.random()*3); 
	var computerChoice;
	switch (randomNumber) {
		case 0:
			computerChoice = 'rock';
			break;
		case 1:
			computerChoice = 'paper';
			break;
		case 2:
			computerChoice = 'scissors';
			break;
		default: computerChoice = 'rock';
	}
	return computerChoice;
}

function getScore() {
	var playerScore = document.getElementById("playerScore").innerHTML;
	var computerScore = document.getElementById("computerScore").innerHTML;
	return {player: playerScore, computer: computerScore};
}

function submitRock() {
	var currentScore = getScore();
	document.getElementById("yourChoice").innerHTML =
		"You choose rock";
	var choice = getComputerChoice();
	document.getElementById("computerChoice").innerHTML =
		"Computer chooses " + choice;
	var result =
		choice === 'rock' ? 'tie' :
			choice === 'scissors' ? 'win' :
				'lose';
	concludeRound(result, currentScore);
}
function submitPaper() {
	var currentScore = getScore();
	document.getElementById("yourChoice").innerHTML =
		"You choose paper";
	var choice = getComputerChoice();
	document.getElementById("computerChoice").innerHTML =
		"Computer chooses " + choice;
	var result =
		choice === 'rock' ? 'win' :
			choice === 'scissors' ? 'lose' :
				'tie';
	concludeRound(result, currentScore);
}
function submitScissors() {
	var currentScore = getScore();
	document.getElementById("yourChoice").innerHTML =
		"You choose scissors";
	var choice = getComputerChoice();
	document.getElementById("computerChoice").innerHTML =
		"Computer chooses " + choice;
	var result =
		choice === 'rock' ? 'lose' :
			choice === 'scissors' ? 'tie' :
				'win';
	concludeRound(result, currentScore);
}

function concludeRound(result, score) {
	var currentScore = score;
	displayResult(result);
	var updatedScore = getUpdatedScore(result, score);
	setUpdatedScore(updatedScore);
	var gameWinner = checkForGameWin(updatedScore);
	setGameOver(gameWinner);
	endRound(gameWinner);
}

function displayResult(result) {
	document.getElementById("gameResult").innerHTML =
		"You " + result.toUpperCase() + "!";
}


function restartRound() {
	var playerButtons = document.getElementsByClassName("playerChoice");
	for (var i=0; i<playerButtons.length; i++) {
		playerButtons[i].style.display = '';
	}
	var gameResults = document.getElementsByClassName("gameOutcome");
	for (var i=0; i<gameResults.length; i++) {
		gameResults[i].innerHTML = '';
	}
	document.getElementById("newRound").style.display= 'none';
}

function restartGame() {
	var playerButtons = document.getElementsByClassName("playerChoice");
	for (var i=0; i<playerButtons.length; i++) {
		playerButtons[i].style.display = '';
	}
	var gameResults = document.getElementsByClassName("gameOutcome");
	for (var i=0; i<gameResults.length; i++) {
		gameResults[i].innerHTML = '';
	}
	document.getElementById("newGame").style.display= 'none';
	document.getElementById("playerScore").innerHTML="0";
	document.getElementById("computerScore").innerHTML="0";
}

function getUpdatedScore(result, score) {
	switch(result) {
		case 'win':
		score.player=parseInt(score.player)+1;
		break;
		case 'lose':
		score.computer=parseInt(score.computer)+1;
		break;
		case 'tie':
		break;
	}
	return score;
}

function setUpdatedScore(score) {
	document.getElementById("playerScore").innerHTML=score.player;
	document.getElementById("computerScore").innerHTML=score.computer;
}

function checkForGameWin(score) {
	if (score.player==5) {
		return 'player';
	} else if (score.computer==5) {
		return 'computer';
	} else return null;
}

function endRound(winner) {
	var playerButtons = document.getElementsByClassName("playerChoice");
	for (var i=0; i<playerButtons.length; i++) {
		playerButtons[i].style.display = 'none';
	}
	if (winner===null) {
		document.getElementById("newRound").style.display= 'inherit';
	} else {
		document.getElementById("newGame").style.display= 'inherit';
	}
};

function setGameOver(winner) {
	if (winner==='player') {
		document.getElementById("gameResult").innerHTML="GAME OVER. YOU WIN!";
	} else if (winner==='computer') {
		document.getElementById("gameResult").innerHTML="GAME OVER. YOU LOSE!";
	} else return;
}