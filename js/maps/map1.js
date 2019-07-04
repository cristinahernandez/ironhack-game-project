class Map {
  constructor(level, mapArray) {
    this.level = level;
    this.tileSize = 64;
    this.design = design;
    this.mapArray = mapArray;
  }

  _drawMap() {
    let x = 0;
    let y = 0;

    for (let row = 0; row < this.mapArray.length; row++) {
      for (let col = 0; col < this.mapArray.length; col++) {
        if (this.mapArray[row][col] === 0) {
          ctx.fillStyle = "purple";
          ctx.fillRect(x, y, this.tileSize, this.tileSize);
        }
        if (this.mapArray[row][col] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect = (x, y, this.tileSize, tile.tileSize);
        }
        x += this.tileSize;
      }
      x = 0;
      y += this.tileSize;
    }
  }

  //let map1 = new Map(1);
  //let map 2 = new Map (2);
}
