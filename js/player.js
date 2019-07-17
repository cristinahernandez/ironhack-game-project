//Define Player

class Player extends Character {
  constructor(ctx, tileSize, map) {
    super(ctx, tileSize, map);
    this.x = 45;
    this.y = 45;
    this.playerImage = new Image();
    this.playerImage.src = "./assets/player-down.png";
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.playerImage,
      this.x,
      this.y,
      this.charSize,
      this.charSize
    );
    // this.ctx.fillStyle = "#fff";
    // this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  updateCanvas() {
    ctx.clearRect(0, 0, 400, 400);
    this.drawPlayer;
  }
}
