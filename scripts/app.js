let editedPlayer = 0;
let activePlayer = 0;
let roundCounter = 0;

const player = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('back-drop');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-bord li');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const winnerNameElement = document.getElementById('winner-name');



editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (let gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
};