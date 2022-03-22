function randomSelection() {
    random = Math.floor(Math.random() * 100) + 1;
    if (random <= 33) {
        computerSelection = "Rock";
    } else if (random > 33 && random <= 66) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
} 
function playRound(computerPlay) {
    winner = 0;
    userPlay = prompt("Make your play:", "");
    while (userPlay.toLowerCase() !== "rock" && userPlay.toLowerCase() !== "paper" && userPlay.toLowerCase() !== "scissors") {
        userPlay = prompt("Please make a valid play: ", "");
    }
    console.log("Your play is " + userPlay);
    console.log("Computer's play is " + computerPlay);
    switch (computerPlay) {
        case "Rock":
            if (userPlay.toLowerCase() === "rock") {
                console.log("Tie! " + computerPlay + " ties with " + userPlay);
            } else if (userPlay.toLowerCase() === "paper") {
                console.log("Win! " + computerPlay + " loses with " + userPlay);
                winner = "user";
            } else if (userPlay.toLowerCase() === "scissors") {
                console.log("Lose! " + computerPlay + " wins with " + userPlay);
                winner = "computer";
            }
            break;
        case "Paper":
            if (userPlay.toLowerCase() === "paper") {
                console.log("Tie! " + computerPlay + " ties with " + userPlay);
            } else if (userPlay.toLowerCase() === "scissors") {
                console.log("Win! " + computerPlay + " loses with " + userPlay);
                winner = "user";
            } else if (userPlay.toLowerCase() === "rock") {
                console.log("Lose! " + computerPlay + " wins with " + userPlay);
                winner = "computer";
            }
            break;
        case "Scissors":
            if (userPlay.toLowerCase() === "scissors") {
                console.log("Tie! " + computerPlay + " ties with " + userPlay);
            } else if (userPlay.toLowerCase() === "rock") {
                console.log("Win! " + computerPlay + " loses with " + userPlay);
                winner = "user";
            } else if (userPlay.toLowerCase() === "paper") {
                console.log("Lose! " + computerPlay + " wins with " + userPlay);
                winner = "computer";
            }
            break;
    }
    return winner;
}
function game() {
    user = 0;
    computer = 0;
    rounds = 0;
    ties = 0;
    while (user < 3 && computer < 3) {
        playRound(randomSelection());
        rounds++;
        if (winner === "computer") {
            computer++;
        } else if (winner === "user") {
            user++;
        } else {
            ties++;
        }
    }
    if (computer === 3) {
        console.log("The computer wins the game " + computer + "-" + user + ". " + rounds + " were played.");
    } else if (user === 3) {
        console.log("You win the game " + user + "-" + computer + ". " + rounds + " were played.");
    }
    console.log("There have been " + ties + " ties.")
}
game();