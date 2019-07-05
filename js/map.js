class Map {
  constructor(ctx, tileSize) {
    this.tileSize = tileSize;
    //this.design = design;
    this.map = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.ctx = ctx;
  }

  drawMap() {
    let x = 0;
    let y = 0;

    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === 0) {
          this.ctx.fillStyle = "#df5d3f";
          this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 1) {
          this.ctx.fillStyle = "#e8dabb";
          this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        x += this.tileSize;
      }
      x = 0;
      y += this.tileSize;
    }
  }
}
