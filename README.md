# This repository is Hungarian

# Tic Tac Toe

Ez a projekt egy egyszerű Tic Tac Toe játékot valósít meg, amit Node.js-ben írunk, HTML, CSS és JavaScript nyelvek használatával.

## Projekt struktúra

A projekt a következő fájlokból áll:

- `index.html`: Ez a fájl tartalmazza a játék HTML vázát.
- `styles.css`: Ez a fájl tartalmazza a játék stílusait.
- `scripts.js`: Ez a fájl felelős a játéktábla generálásáért és a játékmód kiválasztásáért.
- `index.js`: Ez a fájl fogja kezelni a játék logikáját és az AI-t.

## Játék beállításai

A játékban a felhasználó kiválaszthatja a játéktér méretét (3x3, 5x5, 9x9) és a játékmódot (ember-ember[huhu], ember-AI[huai], AI-AI[aiai]).

## Játéktábla generálása

A `scripts.js` fájlban található egy `generateBoard` függvény, ami generálja a játéktáblát a megadott méret alapján. A játéktábla cellái `div` elemek, amiket hozzáadunk a `game-board` divhez. A játéktábla szélességét a cellák száma alapján állítjuk be.

## Játékmód kiválasztása

A játékmód kiválasztása a `game-mode` select elemmel történik. A kiválasztott játékmód értékét a `startGameButton` gombra kattintva írjuk ki a konzolra. A játékmód beállítását majd az `index.js` fájlban fogjuk kezelni.
