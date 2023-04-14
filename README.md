
#Tic Tac Toe Game Project

This is a simple tic tac toe game project that demonstrates the use of the Javascript module pattern and factory functions. The game is designed to be played by two players, taking turns to place their markers on a 3x3 grid until one player gets three in a row, either horizontally, vertically or diagonally.

Technologies Used
HTML
CSS
JavaScript
How to Play
To play the game, simply open the index.html file in your browser. The game board will appear, and the first player will be prompted to make their move. Click on the desired cell to place your marker. The game will alternate between the two players until someone wins or the game ends in a tie. At the end of the game, you will have the option to start a new game.

How it Works
The project uses the module pattern to organize the code into separate modules with their own private state and public methods. The gameBoard module manages the game board grid and checks for winning combinations. The player module creates player objects with a name and marker symbol. The game module controls the flow of the game, switching between players and checking for a win or tie.

In addition, factory functions are used to create the player objects and game board grid. This allows for easy creation of new players and game boards without having to manually create and assign properties.

Conclusion
This project demonstrates the use of the module pattern and factory functions in a real-world application. By using these design patterns, the code is organized, reusable, and easier to maintain. It also provides a fun way to play tic tac toe!