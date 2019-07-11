class Poo extends Character {
  constructor(ctx, charSize) {
    super(ctx, charSize);
    this.x = 285;
    this.y = 125;
    this.pooArray = [];
  }

  drawPoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
