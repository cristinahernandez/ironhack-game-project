class Map {
  constructor(ctx, tileSize, map) {
    this.tileSize = tileSize;
    this.map = map;
    this.ctx = ctx;
    this.tileImage = new Image();
    this.tileImage.src = "./assets/grass.png";
    this.roadImage = new Image();
    this.roadImage.src = "./assets/road-tile.png";
    this.leftRoadTile = new Image();
    this.leftRoadTile.src = "./assets/left-road-tile.png";
    this.horizontal = new Image();
    this.horizontal.src = "./assets/horizontal-road-tile.png";
    this.topRightRoadTile = new Image();
    this.topRightRoadTile.src = "./assets/top-right-road-tile.png";
    this.verticalRoadTile = new Image();
    this.verticalRoadTile.src = "./assets/vertical-road-tile.png";
    this.leftInterRoadTile = new Image();
    this.leftInterRoadTile.src = "./assets/left-inter-road-tile.png";
    this.halfInterRightRoadTile = new Image();
    this.halfInterRightRoadTile.src = "./assets/half-inter-right-road-tile.png";
    this.topLeftRoadTile = new Image();
    this.topLeftRoadTile.src = "./assets/top-left-road-tile.png";
    this.bottomLeftRoadTile = new Image();
    this.bottomLeftRoadTile.src = "./assets/bottom-left-road-tile.png";
    this.interRoadTile = new Image();
    this.interRoadTile.src = "./assets/inter-road-tile.png";
    this.bottomHalfInterRoadTile = new Image();
    this.bottomHalfInterRoadTile.src =
      "./assets/bottom-half-inter-road-tile.png";
    this.rightRoadTile = new Image();
    this.rightRoadTile.src = "./assets/right-road-tile.png";
    this.rightInterRoadTile = new Image();
    this.rightInterRoadTile.src = "./assets/right-inter-road-tile.png";
    this.topRoadTile = new Image();
    this.topRoadTile.src = "./assets/top-road-tile.png";
    this.bottomRightRoadTile = new Image();
    this.bottomRightRoadTile.src = "./assets/bottom-right-road-tile.png";
    this.topHalfRoadTile = new Image();
    this.topHalfRoadTile.src = "./assets/top-half-inter-road-tile.png";
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
          this.ctx.drawImage(this.horizontal, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 2) {
          this.ctx.drawImage(this.leftRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 3) {
          this.ctx.drawImage(this.verticalRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 4) {
          this.ctx.drawImage(this.topRightRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 5) {
          this.ctx.drawImage(this.leftInterRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 6) {
          this.ctx.drawImage(this.halfInterRightRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 7) {
          this.ctx.drawImage(this.topLeftRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 8) {
          this.ctx.drawImage(this.bottomLeftRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 9) {
          this.ctx.drawImage(this.interRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 10) {
          this.ctx.drawImage(this.bottomHalfInterRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 11) {
          this.ctx.drawImage(this.rightRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 12) {
          this.ctx.drawImage(this.rightInterRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 13) {
          this.ctx.drawImage(this.topRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 14) {
          this.ctx.drawImage(this.bottomRightRoadTile, x, y);
          // this.ctx.fillStyle = "#e8dabb";
          // this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.map[row][col] === 15) {
          this.ctx.drawImage(this.topHalfRoadTile, x, y);
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
