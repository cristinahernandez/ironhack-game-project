//Define Dog

class Dog extends Character {
  constructor(ctx) {
    super(ctx);
    this.x = 125;
    this.y = 45;
    this.pooping = this.generatePoo();
    this.poosArray = [];
  }

  //refactorizar drawCharacter
  drawDog() {
    this.ctx.fillStyle = "#418FDE";
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
      this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
      //La idea es llamar a newPoo(this.ctx, this.charSize, this.x, this.y) y que pinte un poo
      //Luego es hacer this.poosArray.push(newPoo(this.ctx, this.charSize, this.x, this.y))
    }, 5000);
  }
}
