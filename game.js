
// this module controls the game board
const gameBoard =(()=>{
 let board = ['', '', '', '', '', '', '', '',]

function getBoard() {
    return board
}


function resetBoard(){
    return board =['', '', '', '', '', '', '', '','']
}


function placeMarker(){
    
}
})








// This factory function creates the players and sets their markers 
const players =((name, marker)=>{
    
    return{
        name:name,
        marker:marker
    }
})