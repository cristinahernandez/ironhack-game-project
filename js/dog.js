//Define Dog

class Dog extends Character {
  constructor(ctx) {
    super(ctx);
    this.x = 125;
    this.y = 45;
    this.pooping = this.generatePoo();
    this.poosArray = [];
  }

  drawDog() {
    this.ctx.fillStyle = "#418FDE";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  generatePoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }
}
