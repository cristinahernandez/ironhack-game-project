//Define Player

class Player extends Character {
  constructor(ctx, tileSize, map) {
    super(ctx, tileSize, map);
    this.x = tileSize + 5;
    this.y = tileSize + 5;
    this.playerImage = new Image();
    this.playerImage.src = "./assets/player-down.png";
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.playerImage,
      this.x,
      this.y,
      this.tileSize - 10,
      this.tileSize - 10
    );
    // this.ctx.fillStyle = "#fff";
    // this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
