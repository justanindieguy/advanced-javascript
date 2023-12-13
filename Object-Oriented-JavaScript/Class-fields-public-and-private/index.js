class Cat {
  static numOfCats = 0;

  /*
   * Properties just directly defined on class instances.
   * These are public properties, can be accessed from within and from outside
   * the class instances.
   */
  name = '';
  breed = '';
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    this.numLegs -= 1;
  }
}

class Circle {
  /*
   * Private instance class fields provide a way to maintain encapsulation and
   * not allow external access.
   */
  #radius = 1;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.radius);

// !Anti-pattern: Accessing private property
myCircle.#radius = -10;
console.log(myCircle.#radius);
