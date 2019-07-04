//Define Tile class (don't use until graphics can be included)

class Tile {
  constructor(design, walkeable) {
    this.design = design;
    this.walkeable = walkeable;
    this.filled = false;
  }
}

let road = new Image();
let building = new Image();

road.src = "road.png";
building.src = "building.src";

let roadTile = new Tile(road, true);
let buildingTile = new Tile(building, false);

/* cambiar en _drawMap:
if(this.mapArray[row][col] === 0){
  ctx.drawImage(building.design, x, y, this.tileSize, this.tileSize);
}
if(this.mapArray[row][col] === 1){
  ctx.drawImage(road.design, x, y, this.tileSize, this.tileSize);
}
*/
