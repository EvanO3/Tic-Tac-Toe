const gameBoard=(function(){
    //creates a game board with 9 clots
   const board=["", "", "", "", "", "", "", "", ""]




   

   const renderBoard=(board)=>{
      const render = document.querySelectorAll('.cell')
      render.forEach((render, index)=>{
            render.innerHTML= board[index];
      }
)}





   return{
    board,
     renderBoard
   }
})();

gameBoard.renderBoard(gameBoard.board);


// running the game
const gameControl = (() => {
    // game control logic
  


    
    const updateBoard = (marker, index) => {
      gameBoard.getBoard()[index] = marker;
    };
  
    return {  updateBoard };
  })();

// players object


const Player =(name, marker) => {
// selects all the cells and appends the players marker to it 
 const cell = document.querySelectorAll(".cell");
  cell.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      cell.innerHTML = getMarker();
      gameControl.updateBoard(getMarker(), index);
    });
  });

    const getName=()=>name;
    const getMarker =()=>marker;
   return {getName, getMarker}
};


const Evan = Player('Evan', "X");
const Jason = Player('Jason', "O")


// Method that controls the game board



