'use strict';

class Player {
  color = '';
  playerNum = 0;
  static playerCount = 0;

  constructor(color) {
    if (typeof color !== 'string' || !color) {
      throw new Error('Invalid color!');
    }

    Player.playerCount += 1;
    this.color = color;
    this.playerNum = Player.playerCount;
  }
}

/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
class Game {
  players = [];
  currPlayer; // active player: 1 or 2
  width = 0;
  height = 0;
  board = []; // array of rows, each ow is array of cells (board[y][x])
  // (board[5][0] would be the bottom-left spot on the board)
  gameOver = false;

  static startBtn = document.getElementById('start-btn');

  constructor(p1, p2, width = 7, height = 6) {
    if (typeof width !== 'number' || width <= 0 || !Number.isFinite(width)) {
      throw new Error('Invalid width!');
    }

    if (typeof height !== 'number' || height <= 0 || !Number.isFinite(height)) {
      throw new Error('Invalid height!');
    }

    this.players = [p1, p2];
    this.currPlayer = p1;
    this.width = width;
    this.height = height;
    this.makeBoard();
    this.makeHtmlBoard();
  }

  static {
    /** Start game when "Start Game" button is clicked */
    this.startBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.startGame();
    });

    this.startGame();
  }

  static startGame() {
    Player.playerCount = 0;
    const p1 = new Player(document.getElementById('p1-color').value);
    const p2 = new Player(document.getElementById('p2-color').value);
    new Game(p1, p2);
  }

  /** makeBoard: fill in global `board`:
   *    board = array of rows, each row is array of cells (board[y][x])
   */
  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      const emptyRow = Array.from({ length: this.width }).fill(null);
      this.board.push(emptyRow);
    }
  }

  /** makeHtmlBoard: make HTML table and row of column tops. */
  makeHtmlBoard() {
    const htmlBoard = document.getElementById('board');

    // reset the board
    htmlBoard.innerHTML = '';

    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', `top-${x}`);
      headCell.addEventListener('click', (evt) => this.handleClick(evt));

      top.append(headCell);
    }

    htmlBoard.append(top);

    // dynamically creates the main part of html board
    // uses this.height to create table rows
    // uses this.width to create table cells for each row
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `c-${y}-${x}`);
        row.append(cell);
      }

      htmlBoard.append(row);
    }
  }

  /** findSpotForCol: given column x, return y coordinate of furthest-down spot
   *    (return null if filled) */
  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.board[y][x] === null) {
        return y;
      }
    }

    return null;
  }

  /** placeInTable: update DOM to place piece into HTML table of board */
  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece', 'm-auto', 'p-0', 'd-block');
    piece.classList.add(`player-${this.currPlayer.playerNum}`);
    piece.style.backgroundColor = this.currPlayer.color;

    const spot = document.getElementById(`c-${y}-${x}`);
    spot.append(piece);
  }

  #hasWinningCombination(...checkForWinning) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return checkForWinning.find((cells) =>
      cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      )
    );
  }

  /** checkForWin: check board cell-by-cell for "does a win start here?" */
  checkForWin() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [
          [y, x],
          [y, x + 1],
          [y, x + 2],
          [y, x + 3],
        ];
        const vert = [
          [y, x],
          [y + 1, x],
          [y + 2, x],
          [y + 3, x],
        ];
        const diagDR = [
          [y, x],
          [y + 1, x + 1],
          [y + 2, x + 2],
          [y + 3, x + 3],
        ];
        const diagDL = [
          [y, x],
          [y + 1, x - 1],
          [y + 2, x - 2],
          [y + 3, x - 3],
        ];

        // find winner (only checking each win-possibility as needed)
        const winningCells = this.#hasWinningCombination(
          horiz,
          vert,
          diagDR,
          diagDL
        );

        if (winningCells) {
          return winningCells;
        }
      }
    }

    return null;
  }

  highlightWinningCells(winningCells) {
    winningCells.forEach(([y, x]) => {
      const winningSpot = document.getElementById(`c-${y}-${x}`);
      winningSpot.style.backgroundColor = 'gold';
    });
  }

  /** endGame: announce game end */
  endGame(msg) {
    this.gameOver = true;
    alert(msg);
  }

  /** handleClick: handle click of column top to play piece */
  handleClick(evt) {
    if (this.gameOver) {
      return;
    }

    // get x from ID of clicked cell
    const x = Number(evt.target.id.slice('top-'.length));

    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }

    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    // check for win
    const winningCells = this.checkForWin();
    if (winningCells) {
      this.highlightWinningCells(winningCells);
      return this.endGame(`Player ${this.currPlayer.playerNum} won!`);
    }

    // check for tie: if top row is filled, board is filled
    if (this.board[0].every((cell) => cell !== null)) {
      return this.endGame('Tie!');
    }

    // switch players
    this.currPlayer =
      this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }
}
