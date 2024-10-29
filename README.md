# snakey-snake-game

User Stories
1. As a player, I want to move the snake in four directions (up, down.left, right).
   acceptance criteria:
   - the player can use arrow keys to change the direction to which the snake is moving
   - the snake should continuously move in the chosen direction unless the key has been pressed
3. As a player, I want the snake to grow longer each time it eats food, so that I can achieve a higher score.
   acceptance criteria:
   - when the snake "eats" a food item, the length of the snake increases by one segment.
   - the food disappears and respawns in a new location.
5. As a player, I want to know what are the win and lose conditions on the same screen as the game play.
   acceptance criteria:
   - the win and lose criterias are clearly displayed at all times.
6. As a player, I want to lose the game when the snake collides with itself or when it collides with the wall so that I am challenged to avoid it.
   acceptance criteria:
   - the win and lose criterias are clearly displayed at all times.
7. As a player, I want to be able to challenge myself by varying the speed of the snake 
10. As a player, I want the snake's movement to be smooth and responsive, so that I can enjoy the gameplay experience.
11. As a player, I want to know if a game is over.
   acceptance criteria:
   - notification box that says "Game Over" appears when one of the game over criterias is 
11. As a player, I want to restart the game after a game over.

Wireframe

Model / State

Thought Process-----------------------------------------------------------------------------------------------------

1. create gameContainer div, put id="game-container" --> call this getElementbyId in app.js

1. create grid, each cell is a div. use loop to add to gameContainer 
- for each row, for every column, create a div, add to
- limit the length and width to 20 --> store in a constant at the start

1. create getIndex function to access the grid array by the (x, y)

1. put snake at initial position/subsequent snake position/ 

array of objects with (x, y). start with 3 elements. to render, use a for loop, get the index in the array of "snake" using a function, call the x and y inside the getIndex function. call the array of "cells"'s index to refer to the div with that index, name them class="snake". so in CSS, only those divs with the class snake will be colored. so everytime you render, need to delete every div's class FIRST before coloring the snake. how to handle lengthening snake?

1. render food:
same as rendering a snake, but without a loop needed as it only needs to occupy 1 spot. add class name "food" to the index of "cells" grid. in CSS, color the div with the class food.

1. how to move snake:
direction --> use eventlistener and change the direction up down left right --> manipulate the index of the snake divs in the "Cells" container (x, y) of the snake 

1. how to reset game:

