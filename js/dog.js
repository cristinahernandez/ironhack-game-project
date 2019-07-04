//Define Dog

class Dog extends Character {
  constructor(name, design, x, y) {
    super(name, design, x, y);
    this.generatePoos = generatePoos;
    let generatePoos = function() {
      //when Dog is moving each 10sec push a poo to poosArray
      poosArray.array.forEach(element => {
        element.draw();
      });
    };
  }
}
