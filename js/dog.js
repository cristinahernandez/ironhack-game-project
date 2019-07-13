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
    //setInterval(() => {
    //console.log("I'm pooping!");

    this.ctx.fillStyle = "#48403C";
    this.ctx.fillRect(this.x, this.y, this.charSize, this.charSize);
    // let poo = New Poo(this.ctx, this.charSize, this.x, this.y);
    // console.log(poo);
    //La idea es llamar a newPoo(this.ctx, this.charSize, this.x, this.y) y que pinte un poo
    //Luego es hacer this.poosArray.push(newPoo(this.ctx, this.charSize, this.x, this.y))
    // }, 7000);
  }
}
