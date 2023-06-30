// Az elemek kiválasztása
const boardSizeSelect = document.getElementById('board-size');
const gameModeSelect = document.getElementById('game-mode');
const startGameButton = document.getElementById('start-game');
const gameBoardDiv = document.getElementById('game-board');
const feedbackDiv = document.getElementById('feedback');
const restartGameButton = document.getElementById('restart-game');
const moveInput = document.getElementById('move');
const submitMoveButton = document.getElementById('submit-move');

// A játéktábla generálása
function generateBoard(size) {
    // Először töröljük a játéktábla és a 'feedback' (visszajelzés) tartalmát
    gameBoardDiv.innerHTML = '';
    feedbackDiv.innerHTML = '';

    // Létrehozzuk a sor- és oszlopszámokat
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const topRow = document.createElement('div');
    const bottomRow = document.createElement('div');
    topRow.classList.add('row');
    bottomRow.classList.add('row');
    for (let i = 0; i < size; i++) {
        const topCell = document.createElement('div');
        const bottomCell = document.createElement('div');
        topCell.classList.add('cell', 'label');
        bottomCell.classList.add('cell', 'label');
        topCell.textContent = bottomCell.textContent = letters[i];
        topRow.appendChild(topCell);
        bottomRow.appendChild(bottomCell);
    }
    gameBoardDiv.appendChild(topRow);

    // Létrehozzuk a cellákat
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        const leftCell = document.createElement('div');
        const rightCell = document.createElement('div');
        leftCell.classList.add('cell', 'label');
        rightCell.classList.add('cell', 'label');
        leftCell.textContent = rightCell.textContent = i + 1;
        row.appendChild(leftCell);
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        row.appendChild(rightCell);
        gameBoardDiv.appendChild(row);
    }

    gameBoardDiv.appendChild(bottomRow);

    // Beállítjuk a játéktábla szélességét a cellák száma alapján
    gameBoardDiv.style.width = `${(size + 2) * 100}px`;
}

// Visszajelzés generálása
function updateFeedback(message) {
    const p = document.createElement('p');
    p.textContent = message;
    feedbackDiv.appendChild(p);
}

// A játék indítása gomb eseménykezelője
startGameButton.addEventListener('click', () => {
    const boardSize = parseInt(boardSizeSelect.value);
    const gameMode = gameModeSelect.value;

    // A játéktábla generálása
    generateBoard(boardSize);

    // A visszajelzés frissítése
    updateFeedback(`A játékmód: ${gameMode}`);

    // A játékmód beállítása
    // (Ezt majd az index.js fájlban fogjuk kezelni)
    console.log(`A játékmód: ${gameMode}`);
}
);

// A játék újraindítása
restartGameButton.addEventListener('click', () => {
    // A játéktábla és a visszajelzés div tartalmának törlése
    gameBoardDiv.innerHTML = '';
    feedbackDiv.innerHTML = '';

    // A játékmód és a játéktér méretének visszaállítása az alapértelmezett értékekre
    gameModeSelect.value = 'huhu';
    boardSizeSelect.value = '3';
}
);

// A lépés kezelése
function handleMove() {
    const move = moveInput.value;
    // Itt kezeld le a lépést
    console.log(`A játékos lépése: ${move}`);
}

// Felhasználó beviteli mező
submitMoveButton.addEventListener('click', handleMove);

moveInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleMove();
    }
});
