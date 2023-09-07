import Game from './app';

function startGame() {
  const board = document.querySelector('.game__container');
  const game = new Game(board);

  game.drawBoard();
}
startGame();
