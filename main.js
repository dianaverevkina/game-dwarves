/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
class Game {
  constructor(container) {
    this.container = container;
    this.boardEl = this.container.querySelector('.board');
    this.boardSize = 4;
    this.cells = [];
  }
  drawBoard() {
    for (let i = 0; i < this.boardSize ** 2; i++) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('board__cell', 'cell');
      this.boardEl.append(cellEl);
    }
    this.cells = Array.from(this.boardEl.children);
    this.drawDwarf();
  }
  drawDwarf() {
    this.dwarf = document.createElement('div');
    this.dwarf.classList.add('board__char', 'dwarf');
    this.dwarf.innerHTML = '<img src="./images/goblin.png" alt="dwarf" class="dwarf__img">';
    this.startMovingDwarf();
  }
  startMovingDwarf() {
    const firstCell = this.getRandomCell();
    this.cellWithDwarf = firstCell;
    this.cellWithDwarf.append(this.dwarf);
    this.moveDwarfInterval = setInterval(() => {
      this.moveDwarf();
    }, 2000);
  }
  moveDwarf() {
    let newCell;
    do {
      newCell = this.getRandomCell();
    } while (newCell === this.cellWithDwarf);
    this.cellWithDwarf.querySelector('.dwarf').remove();
    newCell.append(this.dwarf);
    this.cellWithDwarf = newCell;
  }
  getRandomCell() {
    const randomIndex = Math.floor(Math.random() * this.cells.length);
    return this.cells[randomIndex];
  }
}
;// CONCATENATED MODULE: ./src/js/startGame.js

function startGame() {
  const board = document.querySelector('.game__container');
  const game = new Game(board);
  game.drawBoard();
}
startGame();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;