function restart() {
    rounds = 0;
    ties = 0;
    gameWinner = null;
    userScore.textContent = 0;
    computerScore.textContent = 0;
    winner = null;
    userPlay = null;
    computerPlay = null;
    document.querySelector('#ui h2').style.fontSize = '4rem';
    document.querySelector('#ui h2').textContent = "Make your move";
    document.querySelector('#uiMoves').style.height = 'initial';
    document.querySelector('#uiMoves button').style.display = 'none';
    userSymbol.style.opacity = '0';
    computerSymbol.style.opacity = '0';
    document.querySelectorAll('#uiMoves div').forEach((div) => {
        div.style.display = 'initial';
    })
}

function computerSelection() {
    random = Math.floor(Math.random() * 100) + 1;
    if (random <= 33) {
        computerPlay = "rock";
    } else if (random > 33 && random <= 66) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}

function playRound() {
    userSymbol = document.querySelector('#userMove');
    computerSymbol = document.querySelector('#computerMove');
    switch (computerPlay) {
        case "rock":
            computerSymbol.style.backgroundPosition = '-20px';
            if (userPlay === "rock") {
                userSymbol.style.backgroundPosition = '-20px';
                winner = 'tie';
            } else if (userPlay === "paper") {
                userSymbol.style.backgroundPosition = '-160px';
                winner = "user";
            } else if (userPlay === "scissors") {
                userSymbol.style.backgroundPosition = '-290px';
                winner = "computer";
            }
            break;
        case "paper":
            computerSymbol.style.backgroundPosition = '-160px';
            if (userPlay === "paper") {
                userSymbol.style.backgroundPosition = '-160px';
                winner = 'tie';
            } else if (userPlay === "scissors") {
                userSymbol.style.backgroundPosition = '-290px';
                winner = "user";
            } else if (userPlay === "rock") {
                userSymbol.style.backgroundPosition = '-20px';
                winner = "computer";
            }
            break;
        case "scissors":
            computerSymbol.style.backgroundPosition = '-290px';
            if (userPlay === "scissors") {
                userSymbol.style.backgroundPosition = '-290px';
                winner = 'tie';
            } else if (userPlay === "rock") {
                userSymbol.style.backgroundPosition = '-20px';
                winner = "user";
            } else if (userPlay === "paper") {
                userSymbol.style.backgroundPosition = '-160px';
                winner = "computer";
            }
            break;
    }
    userSymbol.style.opacity = '1';
    computerSymbol.style.opacity = '1';
    return winner;
}

function playGame() {
    rounds = 0;
    ties = 0;
    gameWinner = null;
    const moves = document.querySelectorAll('.move')
    moves.forEach((move) => {
        move.addEventListener('click', (e) => {
            userPlay = e.target.id;
            computerSelection();
            playRound();
            rounds++;
            userScore = document.querySelector('#userScore');
            computerScore = document.querySelector('#computerScore');
            if (winner === 'user') {
                userScore.textContent = parseInt(userScore.textContent) + 1;
                if (userScore.textContent === "5") {
                    gameWinner = 'You';
                }
            } else if (winner === 'computer') {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                if (computerScore.textContent === "5") {
                    gameWinner = 'The computer';
                }
            } else {
                ties++;
            }
            if (gameWinner !== null) {
                document.querySelector('#ui h2').style.fontSize = '2.5rem';
                document.querySelector('#ui h2').textContent = gameWinner + ' won the game! There have been ' + rounds + ' rounds, of which ' + ties + ' were ties.';
                document.querySelector('#uiMoves').style.height = '60%';
                document.querySelector('#uiMoves button').style.display = 'initial';
                document.querySelectorAll('#uiMoves div').forEach((div) => {
                    div.style.display = 'none';
                })
                document.querySelector('#uiMoves button').addEventListener('click', () => {
                    restart();
                });
            }
        })
    })
}

playGame();