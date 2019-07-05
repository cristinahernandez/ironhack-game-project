//Define Character class

class Character {
  constructor(ctx, tileSize, position, design) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.position = position;
    this.design = design;
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
  }

  drawCharacter() {
    let x = this.position[0];
    let y = this.position[1];

    console.log(`position in x is: ${x} and position in y is ${y}`);
    console.log(this.map);
    console.log(this.map[x][y]);
    console.log(this.design);
    this.ctx.fillStyle = this.design;
    this.ctx.fillRect(this.map[x], this.map[y], this.tileSize, this.tileSize);
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
