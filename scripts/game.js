function resetGameStatus() {
    activePlayer = 0;
    roundCounter = 0;
    gameIsOver = false;
    gameOverElement.style.display = 'none';

    let gameFieldindex = 0;

    for ( let i = 0; i < 3; i++) {
        for ( let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameFieldElements[gameFieldindex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameFieldindex++;
        }

    }
};


function startNewGame() {
    if (player[0].name === '' || player[1].name === '') {
        alert("please set custom player names for both players");
        return;
    };

    resetGameStatus();

    activePlayerNameElement.textContent = player[activePlayer].name;
    gameAreaElement.style.display = 'block';
};

function swithPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    };
    activePlayerNameElement.textContent = player[activePlayer].name;
};

function selectGameField(event) {
    if (gameIsOver) {
        return;
    };
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow] [selectedColumn] > 0) {
        alert("Please select a empty field");
        return;
    };

    selectedField.textContent = player[activePlayer].symbol;
    selectedField.classList.add('disabled');
    
    
    gameData[selectedRow] [selectedColumn] = activePlayer + 1;

    
    roundCounter++;
    gameWiner();
    swithPlayer();
};

function gameWiner() {
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && 
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            gameOverElement.style.display = 'block';
            winnerNameElement.textContent = player[gameData[i][0] - 1].name;
            gameIsOver = true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && 
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]) {
            gameOverElement.style.display = 'block';
            winnerNameElement.textContent = player[gameData[0][i] - 1].name;
            gameIsOver = true;
        }
    }
    
    if (gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2])  {
        gameOverElement.style.display = 'block';
        winnerNameElement.textContent = player[gameData[0][0] - 1].name;
        gameIsOver = true;
    }
    if (gameData[0][2] > 0 && 
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]) {
        gameOverElement.style.display = 'block';
        winnerNameElement.textContent = player[gameData[0][2] - 1].name;
        gameIsOver = true;
    }
    if (roundCounter == 9) {
        gameOverElement.style.display = 'block';
        gameOverElement.firstElementChild.textContent = "Nobody wins!";
        gameIsOver = true;
    }
};