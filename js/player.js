//Define Player

class Player extends Character {
  constructor(ctx, charSize) {
    super(ctx, charSize);
    this.x = 45;
    this.y = 45;
    /*this.timeMoved = 0;
    this.position = [45, 45];
    this.delayMove = 700;*/
  }

  drawPlayer() {
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
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

  /*getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }*/
}
