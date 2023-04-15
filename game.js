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


// players object



const Player =(name, marker) => {


  


    const getName=()=>name;
    const getMarker =()=>marker;
   return {getName, getMarker}
};


const player1 = Player('Evan', "X");
const player2 = Player('Jason', "O")



// find a way to place markers on the board



const gameControl = (() => {
    // game control logic
  let currentPlayer =player1;
    const updateBoard = (marker, index) => {
        gameBoard.board[index] = marker;
        gameBoard.renderBoard(gameBoard.board);
    };


   function handleClick(){
 
    const cellIndex = parseInt(this.getAttribute("data-index"));
    //gets the marker for the current player and appends it to the clicks index
    const marker = currentPlayer.getMarker();
    gameBoard.board[cellIndex] = marker;
    this.textContent = marker;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
// allows onlu 1 click on each cell
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('click', handleClick, {once:true}));




    



   
  
    return {
      // other methods here
updateBoard
      
    }
  
    
  })();

