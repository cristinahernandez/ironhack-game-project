//Define Dog

class Dog extends Character {
  constructor(ctx) {
    super(ctx);
    this.x = 125;
    this.y = 45;
    this.pooping = this.generatePoo();
  }

  //refactorizar drawCharacter
  drawDog() {
    this.ctx.fillStyle = "#89B0AA";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  drawPoo() {
    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  moveUp() {
    this.y -= 40;
  }

  moveDown() {
    this.y += 40;
  }

  moveLeft() {
    this.x -= 40;
  }

  moveRight() {
    this.x += 40;
  }

  generatePoo() {
    setInterval(() => {
      console.log("I'm pooping!");
      console.log(this.x, this.y);
      this.ctx.fillStyle = "#48403C";
      this.ctx.fillRect(this.x, this.y, 30, 30);
    }, 5000);
  }
}
