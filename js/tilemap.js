//Define Tile class (don't use until graphics can be included)

class TileMap {
  constructor(ctx, tileSize, map) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.map = map;
    // this.tilemap = new Image();
    // this.tilemap.src = "./assets/pick-your-shit-tilesmap.png";
    // this.design = design;
    // this.walkeable = walkeable;
    // this.filled = false;
  }
  drawTilesMap() {
    console.log(this.tilemap);
    // let x = 0;
    // let y = 0;
    // for (let row = 0; row < this.map.length; row++) {
    //   for (let col = 0; col < this.map[row].length; col++) {
    //     if (this.map[row][col] === 0) {
    //       this.ctx.drawImage(
    //         this.tilemap,
    //         576,
    //         192,
    //         this.tileSize,
    //         this.tileSize
    //       );
    //     }
    //     if (this.map[row][col] === 1) {
    //       this.ctx.fillStyle = "#e8dabb";
    //       this.ctx.fillRect(x, y, this.tileSize, this.tileSize);
    //     }
    //     x += this.tileSize;
    //   }
    //   x = 0;
    //   y += this.tileSize;
    // }
  }
}

// let road = new Image();
// let building = new Image();

// road.src = "road.png";
// building.src = "building.src";

// let roadTile = new Tile(road, true);
// let buildingTile = new Tile(building, false);

/* cambiar en _drawMap:
if(this.mapArray[row][col] === 0){
  ctx.drawImage(building.design, x, y, this.tileSize, this.tileSize);
}
if(this.mapArray[row][col] === 1){
  ctx.drawImage(road.design, x, y, this.tileSize, this.tileSize);
}
*/
