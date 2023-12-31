// Classes are a "blueprint" of functionality

/**
 * Defines methods each instance of Triangle will have
 */
class Triangle {
  // Any method named constructor will be called on making a new instance
  constructor(a, b) {
    // It is common to validate data inside constructors
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error(`Invalid a: ${a}`);
    }

    if (!Number.isFinite(b) || b <= 0) {
      throw new Error(`Invalid b: ${b}`);
    }

    this.a = a;
    this.b = b;
  }

  getArea() {
    // "this" refers to the current instance of the class
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    // Accessing other instance methods
    return `Area is ${this.getArea()} and hypotenuse is ${this.getHypotenuse()}`;
  }
}

class ShyTriangle extends Triangle {
  describe() {
    return '(runs and hides)';
  }

  beShy() {
    return 'I am shy!';
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color || 'red';
  }

  describe() {
    return `Area is ${this.getArea()}. Color is ${this.color}!`;
  }
}

let myTriangle = new Triangle(3, 4); // "instantiation"

// Can still add/look at arbitrary properties
myTriangle.c = 'blah';

console.log(myTriangle.describe()); // 6

let newTriangle = new Triangle(5, 12);
console.log(newTriangle.describe()); // 6
