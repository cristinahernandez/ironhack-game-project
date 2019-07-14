class Poo {
  constructor(ctx, charSize, x, y, tileSize) {
    // super(ctx, charSize);
    this.ctx = ctx;
    this.charSize = charSize;
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.poopImage = new Image();
    this.poopImage.src = "./assets/poop.png";
  }

  drawPoo() {
    this.ctx.drawImage(
      this.poopImage,
      this.x,
      this.y,
      this.charSize,
      this.charSize
    );
    // this.ctx.fillStyle = "#48403C";
    // this.ctx.fillRect(this.x + 10, this.y + 10, 10, 10);
  }

  getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }
}
