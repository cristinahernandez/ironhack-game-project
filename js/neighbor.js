class Neighbor extends Character {
  constructor(ctx, charSize) {
    super(ctx);
    this.x = 325;
    this.y = 205;
    //this.stepping = this.stepPoo();
  }

  drawNeighbor() {
    this.ctx.fillStyle = "#8E4483";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  stepPoo() {
    console.log("Hello"); //if position of neighbor === index position of any poosArray element
    //to make it simple, if neighbor step on a sh** just game over
    game.gameOver();
  }
}
