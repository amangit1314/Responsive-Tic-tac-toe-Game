import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClicked(tile.dataset.index);
    })
})

function onTileClicked(i) {
    // do something
    game.makeMove(i);
    gameView.updateBoard(game);
    game.nextTurn();
    
}