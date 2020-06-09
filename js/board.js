game.board = {
  game: game,
  rows: 15,
  cols: 15,
  cells: [],

  create() {
    this.createCells();
  },

  createCells() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.cells.push(this.createCell(row, col));
      }
    }
  },

  createCell(row, col) {
    const cellSize = this.game.sprites.cell.width + 1;
    const offsetX = (this.game.width - cellSize * this.cols) / 2;
    const offsetY = (this.game.height - cellSize * this.rows) / 2;

    return {
      row: row,
      col: col,
      x: offsetX + cellSize * col,
      y: offsetY + cellSize * row,
    };
  },

  getCell(row, col) {
    return this.cells.find((cell) => {
      return row === cell.row && col === cell.col;
    });
  },

  render() {
    this.cells.forEach((cell) => {
      this.game.ctx.drawImage(this.game.sprites.cell, cell.x, cell.y);
    });
  },
};
