class Neighbor extends Character {
  constructor(ctx, charSize) {
    super(ctx);
    this.x = 325;
    this.y = 325;
    //this.stepping = this.stepPoo();
  }

  drawNeighbor() {
    this.ctx.fillStyle = "#8E4483";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  moveRandomNeighbor() {
    let getRandomNum = Math.floor(Math.random() * Math.floor(4));
    switch (getRandomNum) {
      case 0:
        this.moveUp();
        break;
      case 1:
        this.moveDown();
        break;
      case 2:
        this.moveLeft();
        break;
      case 3:
        this.moveRight();
        break;
    }
  }

  stepPoo() {
    console.log("Hello"); //if position of neighbor === index position of any poosArray element
    //to make it simple, if neighbor step on a sh** just game over
    game.gameOver();
  }
}
