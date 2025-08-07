//use array, continue, break
//refactoring - 1
//functions
//refactoring - 2

const buttonGaming = document.getElementById('buttonS');
buttonGaming.addEventListener('click', game);

/**
 * Reload the page after alerting a message.
 * @param {string} message
 */
function alertAndReload(message) {
    alert(message);
    window.location.reload();
}

/**
 * Main game loop for Rock-Paper-Scissors using prompt/alert UI.
 */
function game() {
    const userInput = prompt('Do you want to play a game of rock paper scissor? (yes/no)');
    const playerChoice = userInput;

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // Map numeric choice to string
    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if (computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    // Validate player input
    if (userInput === null) {
        return alertAndReload('Enter a valid choice!');
    }
    if (userInput.length === 0) {
        return alertAndReload("Please enter your answer!");
    }

    if (playerChoice.length) {
        if (playerChoice === 'yes') {
            const choice = prompt('Enter rock/paper/scissor : ');
            if (choice === null) {
                return alertAndReload('It seems you have changed your decision!');
            } else if (choice.length === 0) {
                return alertAndReload("Please enter a valid choice!");
            } else if (choice != 'rock' && choice != 'paper' && choice != 'scissor'){
                return alertAndReload("Please enter a valid choice! (All small)");
            } else{
                const para2 = document.getElementById('paraNew2');
                para2.innerHTML = "You chose : " + choice;
                const para1 = document.getElementById('paraNew');
                para1.innerHTML = "Computer chose : " + computerChoice;
                const answer = document.getElementById('answer');
                switch (choice) {
                    case "rock":
                        if (computerChoice === "rock") {
                            answer.innerHTML = "Tie!"
                        }
                        else if(computerChoice==="paper"){
                            answer.innerHTML = "Computer wins!"
                        }
                        else {
                            answer.innerHTML = "You win!";
                        }
                        break;
                    case "paper":
                        if (computerChoice === "rock") {
                            answer.innerHTML = "You win!"
                        }
                        else if (computerChoice === "paper") {
                            answer.innerHTML = "Tie!"
                        }
                        else {
                            answer.innerHTML = "Computer wins!";
                        }
                        break;

                    case "scissor":
                        if (computerChoice === "rock") {
                            answer.innerHTML = "Computer wins!"
                        }
                        else if (computerChoice === "paper") {
                            answer.innerHTML = "You win!!"
                        }
                        else {
                            answer.innerHTML = "Tie!";
                        }
                        break;
                }

            }
        }
        else if (playerChoice === 'no') {
            alert('Thank You for visiting my website! Have a nice day!');
        }
        else{
            alertAndReload("Please enter a valid answer!");
        }

    }
}