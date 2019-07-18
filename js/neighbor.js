class Neighbor extends Character {
  constructor(ctx, tileSize) {
    super(ctx, tileSize);
    this.x = this.tileSize * 8 + 5;
    this.y = this.tileSize * 5 + 5;
    this.neighborImage = new Image();
    this.neighborImage.src = "./assets/grandma.png";
  }

  drawNeighbor() {
    this.ctx.drawImage(
      this.neighborImage,
      this.x,
      this.y,
      this.tileSize - 10,
      this.tileSize - 10
    );
    // this.ctx.fillStyle = "#8E4483";
    // this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
