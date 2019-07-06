//Define Player

class Player extends Character {
  constructor(ctx) {
    super(ctx);
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.x = 45;
    this.y = 45;
    this.tileSize = 30;
    /*this.timeMoved = 0;
    
    this.position = [45, 45];
    this.delayMove = 700;*/
  }

  drawPlayer() {
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
  }

  updateCanvas() {
    ctx.clearRect(0, 0, 400, 400);
    this.drawPlayer;
  }

  moveUp() {
    this.y -= 40;
  }

  moveDown() {
    this.y += 40;
  }

  moveLeft() {
    this.x -= 40;
  }

  moveRight() {
    this.x += 40;
  }

  getPosition() {
    let posX = Math.floor(this.x / 30);
    let posY = Math.floor(this.y / 30);
    // console.log(this.map[posX][posY]);
  }
}
