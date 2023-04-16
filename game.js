const gameBoard = (function () {
  //creates a game board with 9 slots
  const board = ["", "", "", "", "", "", "", "", "",""];

  const renderBoard = (board) => {
    const render = document.querySelectorAll(".cell");
    render.forEach((render, index) => {
      render.innerHTML = board[index];
    });
  };

  return {
    board,
    renderBoard,
  };
})();

gameBoard.renderBoard(gameBoard.board);

// running the game

// players object

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
};

const player1 = Player("Evan", "X");
const player2 = Player("Jason", "O");

// find a way to place markers on the board

const gameControl = (() => {
  // game control logic
  let currentPlayer = player1;
  const updateBoard = (board, marker, index) => {
    board[index] = marker;
    gameBoard.renderBoard(board);
  };

  function handleClick() {
const cellIndex = this.dataset.index;;
  const marker = currentPlayer.getMarker();
  gameControl.updateBoard(gameBoard.board,marker, cellIndex);
  if (checkWinner(gameBoard.board, marker)) {
    console.log(`${currentPlayer.getName()} won`);
    resetGame();
  } else {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}
  // allows only 1 click on each cell
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("click", handleClick, { once: true })
  );

  const WinningVals = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  // fix winning function so it actually checks for a winning and displays a winner

  function checkWinner(board, marker) {
    for (let i = 0; i < WinningVals.length; i++) {
      const [a, b, c] = WinningVals[i];
      if (board[a] === marker && board[b] === marker && board[c] === marker) {
        return true;
      }
    }
    return false;
  }



  function resetGame() {
    // clear the board
    gameBoard.board = ["", "", "", "", "", "", "", "", "",""];
    gameBoard.renderBoard(gameBoard.board);

    // remove event listeners
    cells.forEach((cell) => {
      cell.removeEventListener("click", handleClick);
    });

    // re-add event listeners
    cells.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
    });

    // reset current player to player 1
    currentPlayer = player1;
  }


  return {
    // other methods here
    updateBoard,
  };
})();
