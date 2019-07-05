//Define Dog

class Dog extends Character {
  constructor(ctx, tileSize, position, design) {
    super(ctx, tileSize);
    this.generatePoos = function() {
      //when Dog is moving each 10sec push a poo to poosArray
      poosArray.array.forEach(element => {
        element.draw();
      });
    };
  }
}
