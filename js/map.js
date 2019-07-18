class Map {
  constructor(ctx, tileSize, map) {
    this.tileSize = tileSize;
    this.map = map;
    this.ctx = ctx;
    this.tileImage = new Image();
    this.tileImage.src = "./assets/grass.png";
    this.roadImage = new Image();
    this.roadImage.src = "./assets/dirt-road.png";
  }

  drawMap() {
    let x = 0;
    let y = 0;

    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === 0) {
          this.ctx.drawImage(this.tileImage, x, y);
          //this.ctx.fillStyle = "#df5d3f";
          //this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 1) {
          this.ctx.drawImage(this.roadImage, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        x += this.tileSize;
      }
      x = 0;
      y += this.tileSize;
    }
  }
}
