export default class Game{
    constructor() {
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null)
        console.log(this.board);
    }
    
    nextTurn() {
        (this.turn == "X") ? 
            this.turn = "O"
         : 
            this.turn = "X"
    }

    makeMove(i) {
        
    }
}