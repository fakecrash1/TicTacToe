// Az elemek kiválasztása
const boardSizeSelect = document.getElementById('board-size');
const gameModeSelect = document.getElementById('game-mode');
const startGameButton = document.getElementById('start-game');
const gameBoardDiv = document.getElementById('game-board');

// A játéktábla generálása
function generateBoard(size) {
    // Először töröljük a játéktábla tartalmát
    gameBoardDiv.innerHTML = '';

    // Létrehozzuk a cellákat
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoardDiv.appendChild(cell);
    }

    // Beállítjuk a játéktábla szélességét a cellák száma alapján
    gameBoardDiv.style.width = `${size * 110}px`;
}

// A játék indítása gomb eseménykezelője
startGameButton.addEventListener('click', () => {
    const boardSize = parseInt(boardSizeSelect.value);
    const gameMode = gameModeSelect.value;

    // A játéktábla generálása
    generateBoard(boardSize);

    // A játékmód beállítása
    // (Ezt majd az index.js fájlban fogjuk kezelni)
    console.log(`A játékmód: ${gameMode}`);
});


// A játéktábla generálása
function generateBoard(size) {
    // Először töröljük a játéktábla tartalmát
    gameBoardDiv.innerHTML = '';

    // Létrehozzuk a cellákat
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoardDiv.appendChild(cell);
    }

    // Beállítjuk a játéktábla szélességét a cellák száma alapján
    gameBoardDiv.style.width = `${size * 110}px`; // Itt módosítottam a szélességet
}
