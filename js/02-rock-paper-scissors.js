const getUserChoice=(gameChoice)=>{
		var userChoice= window.prompt("Please enter your choice: Rock, Paper 0r Scissors ");
		userChoice = userChoice.toLowerCase();
		while(!gameChoice.includes(userChoice)){
			userChoice= window.prompt("Wrong choice! Please enter your choice: 1 for Rock, 2 for Paper, 3 for Scissors ");
		}
		return userChoice;
}

const getComputerChoice=(gameChoice)=>{
	var computerChoice = Math.floor(Math.random()*3);
	return gameChoice[computerChoice];
}

const startGame=()=>{
	const gameChoice = [ "rock", "paper" , "scissors"];
	var userChoice = getUserChoice(gameChoice)
	var computerChoice = getComputerChoice(gameChoice);
	if(userChoice === computerChoice){
		console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nIt's a tie");
	}
	else{
		if(computerChoice === "rock"){
			if(userChoice === "paper"){
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nCongratulations! You won!");
			}
			else{
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nYou lost");
			}
		}
		else if(computerChoice === "paper"){
			if(userChoice === "rock"){
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nYou lost");
			}
			else{
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nCongratulations! You won!");
			}
		}
		else if(computerChoice === "scissors"){
			if(userChoice === "rock"){
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nCongratulations! You won!");
			}
			else{
				console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\nYou lost");
			}
		}
		else{
			console.log("Your choice was "+ userChoice +" and computer choice is " +computerChoice+".\Something is wrong");
		}
	
	}
}

startGame();