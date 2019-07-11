//Define Character class

class Character {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.charSize = 30;
    this.color = color;
    //this.tileSize = tileSize;
    //this.position = position;
    //this.design = design;
    //this.tileFrom = tileFrom;
    //this.tileTo = tileTo;
    this.map;
  }

  getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }

  /*moveRandom() {
    //Use Math.random() to choose a direction
    let left = 0;
    let up = 1;
    let right = 2;
    let down = 3;
    return Math.floor(Math.random() * Math.floor(4));
  }


  _drawCharacter() {
    if (this.name === dog) {
      (Map.ctx.fillRect = this.x), this.y, Map.tileSize, Map.tileSize;
      Map.ctx.fillStyle = this.design;
    }
  }*/
}
