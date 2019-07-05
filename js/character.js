//Define Character class

class Character {
  constructor(ctx, tileSize, position, design) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.name = name;
    this.position = position;
    this.design = design;
  }

  drawCharacter() {
    let position = this.map[x][y];

    for (let row = 0; row < this.map.length; row++) {}
  }

  /*moveRandom() {
    //Use Math.random() to choose a direction
    let left = 0;
    let up = 1;
    let right = 2;
    let down = 3;
    return Math.floor(Math.random() * Math.floor(4));
  }

  checkCollision() {
    if this.position === buildingTile - 1
    moveRandom except building position
  }

  _drawCharacter() {
    if (this.name === dog) {
      (Map.ctx.fillRect = this.x), this.y, Map.tileSize, Map.tileSize;
      Map.ctx.fillStyle = this.design;
    }
  }*/
}
