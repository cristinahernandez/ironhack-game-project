class Neighbor extends Character {
  constructor(ctx, tileSize, charSize) {
    super(ctx, tileSize);
    this.x = 325;
    this.y = 205;
    this.neighborImage = new Image();
    this.neighborImage.src = "./assets/grandma.png";
  }

  drawNeighbor() {
    this.ctx.drawImage(
      this.neighborImage,
      this.x,
      this.y,
      this.charSize,
      this.charSize
    );
    // this.ctx.fillStyle = "#8E4483";
    // this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  stepPoo() {
    console.log("Hello"); //if position of neighbor === index position of any poosArray element
    //to make it simple, if neighbor step on a sh** just game over
    game.gameOver();
  }
}
