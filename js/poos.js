class Poo extends Character {
  constructor(ctx, charSize, x, y) {
    super(ctx, charSize);
    this.x = x;
    this.y = y;
    this.poo = this.drawPoo();
  }

  drawPoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
