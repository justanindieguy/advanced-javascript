// Area of right triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// Hypotenuse of right triangle
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

// Mixing data and functionality (using plain old JavaScript objects)
// !Anti-Pattern waste of memory & time
const myTriangle = {
  a: 3,
  b: 4,
  getArea: function () {
    // this references "this object"
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

const myTriangle2 = {
  a: 5,
  b: 12,
  getArea: function () {
    // this references "this object"
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};
