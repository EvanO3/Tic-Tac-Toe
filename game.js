const gameBoard=(function(){
    //creates a game board with 9 clots
   const board=["X", "O", "X", "O", "O", "X", "O", "X", "X"]




   

   const renderBoard=(board)=>{
      let render = document.querySelectorAll('.cell')
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

// players object


const Player =(name, marker) => {

    const getName=()=>name;
    const getMarker =()=>marker;

   return {getName, getMarker}
};





// Method that controls the game board

const runGame=(function(){

})();

