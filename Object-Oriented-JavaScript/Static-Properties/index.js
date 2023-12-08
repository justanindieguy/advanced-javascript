class Cat {
  // good example of a static property --
  // all instances of cats are the same species;
  // it doesn't vary from one cat to another
  static genusSpecies = 'Felis catus';

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  /**
   *  Almost every other OO language more properly calls this a "class method"
   * not a static method - since it does have access to this class itself
   * (that's what the "this" is in a jS "static method")
   *
   * More consistent OO languages, like C++/Java/Python, also have true static
   * methods, where they don't have access to the class itself.
   */
  static method() {
    console.log('this is:', this);
  }

  describe() {
    return `${this.name} is a ${Cat.genusSpecies}`;
  }
}
