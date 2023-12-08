/*
 * JavaScript provides special methods, termed "getters" and "setters", which
 * allow you to define the ways to retrieve or change the values of object
 * properties respectively.
 */

class Circle {
  static allowedColors = new Set(['red', 'green', 'blue']);

  constructor(radius, color) {
    this.setRadius(radius);
    this.setColor(color);
  }

  setRadius(value) {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error('Radius cannot be zero or negative!');
    }

    this._radius = value;
  }

  setColor(newColor) {
    if (!Circle.allowedColors.has(newColor)) {
      throw new Error('That color is not allowed!');
    }

    this._color = newColor;
  }

  /**
   * Allow you to retrieve the value of an object's property.
   * Acts like a property but runs some logic behind the scenes.
   */
  get diameter() {
    return this._radius * 2;
  }

  get radius() {
    return this._radius;
  }

  /**
   * Allow you to set the value of an object's property.
   * Setters can be very useful for validation and to make the constructor
   * shorter.
   */
  set radius(value) {
    this.setRadius(value);
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
