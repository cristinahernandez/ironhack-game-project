class Poo extends Character {
  constructor(ctx, charSize, x, y) {
    super(ctx, charSize);
    this.x = 85;
    this.y = 45;
    this.poo = this.drawPoo();
  }

  drawPoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
