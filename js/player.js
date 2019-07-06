//Define Player

class Player extends Character {
  constructor(ctx, map) {
    super(ctx, map);
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
    ctx.fillText("Ghost_x: " + this.x, 580, 40);
    ctx.fillText("Ghost_y: " + this.y, 580, 60);
    this.drawPlayer;
  }

  moveUp() {
    this.y -= 45;
  }

  moveDown() {
    this.y += 45;
  }

  moveLeft() {
    this.x -= 45;
  }

  moveRight() {
    this.x += 45;
    this.drawPlayer();
    console.log(this.x);
  }
}
