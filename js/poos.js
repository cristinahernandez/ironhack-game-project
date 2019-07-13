class Poo {
  constructor(ctx, charSize, x, y) {
    // super(ctx, charSize);
    this.ctx = ctx;
    this.charSize = charSize;
    this.x = x;
    this.y = y;
  }

  drawPoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x + 10, this.y + 10, 10, 10);
  }

  getPosition() {
    let newX = Math.floor(this.x / 40);
    let newY = Math.floor(this.y / 40);
    return { x: newX, y: newY };
  }
}
