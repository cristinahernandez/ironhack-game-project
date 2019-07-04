//Define Character class

class Character {
  constructor(name, design, x, y) {
    this.name = name;
    this.design = design;
    this.x = x;
    this.y = y;
  }

  moveRandom() {
    //Use Math.random() to choose a direction
    let left = 0;
    let up = 1;
    let right = 2;
    let down = 3;
    return Math.floor(Math.random() * Math.floor(4));
  }

  checkCollision() {
    /*if this.position === buildingTile - 1
    moveRandom except building position*/
  }

  _drawCharacter() {
    if (this.name === dog) {
      (Map.ctx.fillRect = this.x), this.y, Map.tileSize, Map.tileSize;
      Map.ctx.fillStyle = this.design;
    }
  }
}
