//Define Dog

class Dog extends Character {
  constructor(ctx) {
    super(ctx);
    this.x = 125;
    this.y = 45;
    this.dogSpeed = 0;
  }

  /*updateSpeed() {
    this.y += 1;
  }*/

  //refactorizar drawCharacter
  drawDog() {
    this.ctx.fillStyle = "#89B0AA";
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

  generatePoos = function() {
    //when Dog is moving each 10sec push a poo to poosArray
    poosArray.array.forEach(element => {
      element.draw();
    });
  };
}
