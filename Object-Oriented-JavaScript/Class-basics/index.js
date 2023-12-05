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
}

let myTriangle = new Triangle(3, 4); // "instantiation"

// Can still add/look at arbitrary properties
myTriangle.c = 'blah';

console.log('Area:', myTriangle.getArea()); // 6
console.log('Hypotenuse:', myTriangle.getHypotenuse()); // 5

let newTriangle = new Triangle(5, 12);
console.log('Area:', newTriangle.getArea()); // 6
console.log('Hypotenuse:', newTriangle.getHypotenuse()); // 5
