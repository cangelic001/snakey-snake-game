
/*-------------------------------- Constants --------------------------------*/
// Grid size and container
const gridSize = 20; // 20x20 grid
const gameContainer = document.getElementById('game-container');
const helloMessage = document.getElementById("hello-message");
const winMessage = document.getElementById("win-message");
const loseMessage = document.getElementById("lose-message");
const resetBtn = document.querySelector("#btnReset");
const LevelUpBtn = document.querySelector("#btnLevelUp");
const LevelDownBtn = document.querySelector("#btnLevelDown");

/*---------------------------- Variables (state) ----------------------------*/
// Initial snake state: 3 segments with the coordinates below
let snake = [
    { x: 10, y: 10 },
    { x: 11, y: 10 },
    { x: 12, y: 10 }
]; 
let food = { x: 15, y: 15 }; 
let direction = { x: 0, y: 1 }; 

// Creating grid
const cells = [];
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameContainer.appendChild(cell);
        cells.push(cell); 
    }
}

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

// To convert x, y coordinates to index
function getIndex(x, y) {
    return y * gridSize + x;
}

// To display snake and food --> add class "snake" or "food" into individual cells
function render() {
    // Clear grid
    cells.forEach(cell => cell.classList.remove('snake', 'food'));

    // render snake
    snake.forEach(segment => {
        const index = getIndex(segment.x, segment.y);
        cells[index].classList.add('snake');
    });

    // Render food
    const foodIndex = getIndex(food.x, food.y);
    cells[foodIndex].classList.add('food');
}

// To move the snake based on the direction
function moveSnake() {

    // Calculate new head position
    const newHead = {
        x: (snake[0].x + direction.x + gridSize) % gridSize,
        y: (snake[0].y + direction.y + gridSize) % gridSize
    };

    // Check if snake eats food
    if (newHead.x === food.x && newHead.y === food.y) {
        snake.unshift(newHead); // Grow snake by adding new head
        generateFood(); // Place new food

        // Win condition example (if snake reaches length of 10)
        if (snake.length >= 10) {
            winMessage.style.display = "block";
            clearInterval(gameInterval);
        }
    } else {
        snake.pop(); // Remove tail
        snake.unshift(newHead); // Add new head at the front
    }

    // Check for self-collision
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
            loseMessage.style.display = "block";
            clearInterval(gameInterval);
            return;
        }
    }

    render(); // Update the grid display
}

// Generate new food at a random position
function generateFood() {
    food = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
    };
}

// Reset the game
function resetGame() {
    snake = [
        { x: 10, y: 10 },
        { x: 11, y: 10 },
        { x: 12, y: 10 }
    ];
    direction = { x: 0, y: 1 };
    generateFood();
    render();
}

/*----------------------------- Event Listeners -----------------------------*/

// Handle key presses for snake direction
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Handle key presses to reset game
resetBtn.addEventListener("click", resetGame);
// LevelUpBtn.addEventListener("click", levelUpTheAcc);
// LevelDownBtn.addEventListener("click", levelDownTheAcc);

// Start the game with an interval to keep moving the snake
const gameInterval = setInterval(moveSnake, 200); // Move snake every 200ms

// Initial render
render();
