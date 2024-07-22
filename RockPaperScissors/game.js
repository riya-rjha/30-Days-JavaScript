//use array, continue, break
//refactoring - 1
//functions
//refactoring - 2

const buttonGaming = document.getElementById('buttonS');
buttonGaming.addEventListener('click', game);
function game() {
    let userInput = prompt('Do you want to play a game of rock paper scissor? (yes/no)')
    let playerChoice = userInput;
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    //computer choices chosen at random
    if (computerChoice == 1) {
        computerChoice = "rock";
    }
    else if (computerChoice == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }
    //player's choices
    if (userInput === null) {
        alert('Enter a valid choice!');
        window.location.reload();
    }
    if (userInput.length === 0) {
        alert("Please enter your answer!");
        window.location.reload();
    }

    if (playerChoice.length) {

        if (playerChoice === 'yes') {
            let choice = prompt('Enter rock/paper/scissor : ');
            if (choice === null) {
                alert('It seems you have changed your decision!');
                window.location.reload();
            }
            else if (choice.length === 0) {
                alert("Please enter a valid choice!");
                window.location.reload();
            }
            else if (choice != 'rock' && choice != 'paper' && choice != 'scissor'){
                alert("Please enter a valid choice! (All small)");
                window.location.reload();
            }
            else{
                let para2 = document.getElementById('paraNew2');
                para2.innerHTML = "You chose : " + choice;
                let para1 = document.getElementById('paraNew');
                para1.innerHTML = "Computer chose : " + computerChoice;
                let answer = document.getElementById('answer');
                switch (choice) {
                    case "rock":
                        if (computerChoice === "rock") {
                            answer.innerHTML = "Tie!"
                        }
                        else if(computerChoice==="paper"){
                            answer.innerHTML = "You won!"
                        }
                        else {
                            answer.innerHTML = "You wins!";
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
            alert("Please enter a valid answer!");
            window.location.reload();
        }

    }
}