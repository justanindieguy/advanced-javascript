/**
 * Class with static methods are very useful to group related functionality
 * together in a single usable interface.
 *
 * This class just group Math-related functionality.
 */
class MyMath {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  /**
   * Another common use case for static methods: a factory function.
   *
   * It could live outside the class, but it if it's tied to the class, why not
   * group it in there?
   *
   * @returns a Cat instance
   */
  static registerStray() {
    const names = ['Luna', 'Simba', 'Milo', 'Lucy', 'Max', 'Tiger', 'Jack'];
    return new Cat(choice(names), 'unknown');
  }

  meow() {
    return `${this.name} says MEOW!`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
