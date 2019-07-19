class Poo {
  constructor(ctx, tileSize, x, y) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.x = x;
    this.y = y;
    this.poopImage = new Image();
    this.poopImage.src = "./assets/poop.png";
  }

  drawPoo() {
    this.ctx.drawImage(
      this.poopImage,
      this.x,
      this.y,
      this.tileSize,
      this.tileSize
    );
    // this.ctx.fillStyle = "#48403C";
    // this.ctx.fillRect(this.x + 10, this.y + 10, 10, 10);
  }

  getPosition() {
    let newX = Math.floor(this.x / 64);
    let newY = Math.floor(this.y / 64);
    return { x: newX, y: newY };
  }
}
