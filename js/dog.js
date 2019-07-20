//Define Dog

class Dog extends Character {
  constructor(ctx, tileSize) {
    super(ctx, tileSize);
    this.x = this.tileSize * 8 + 5;
    this.y = this.tileSize * 3 + 5;
    this.poosArray = [];
    this.dogImage = new Image();
    this.dogImage.src = "./assets/dog.png";
    //this.spreet = [];
    //this.dogImage.src = this.spreet[0];
  }

  drawDog() {
    this.ctx.drawImage(
      this.dogImage,
      this.x,
      this.y,
      this.tileSize - 10,
      this.tileSize - 10
    );
    // this.ctx.fillStyle = "#418FDE";
    // this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
  }

  // changeDirection(direction) {
  //   direction === up {
  //     this.myImage === 0 {
  //       this.ctx.drawImage(this.dogImages[1])
  //     } else {
  //       this.ctx.drawImage(this.dogImages[0])
  //     }
  //   }
  // }
}
