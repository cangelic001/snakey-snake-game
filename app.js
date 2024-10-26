const gridSize = 5;
const gameContainer = document.getElementById("game-container");

/*
// create grid
const cells = [];
for (let row = 0, row < gridSize, row++) {
    for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div'); // create div
        cell.classList.add('cell'); // add class
        gameContainer.appendChild(cell); // add to html: add this new div to the gameContainer element
        cells.push(cell); // add this new cell to the cells array
    }
};
*/

const cells = [];
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameContainer.appendChild(cell);
        cells.push(cell); // Store cells in a flat array for easy access
    }
}

// initialize
let snake = [
    { x : 1, y : 2},
    { x : 2, y : 2},
    { x : 3, y : 2}
]

// To convert x, y coordinates we input to array index to access the "cells" array
function getIndex(x, y) {
    return y * gridSize + x;
};

function render() {
    snake.forEach(segment => {
        const index = getIndex(segment.x, segment.y);
        cells[index].classList.add('snake');
    });
};

render();