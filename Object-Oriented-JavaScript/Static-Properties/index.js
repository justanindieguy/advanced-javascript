class Cat {
  // good example of a static property --
  // all instances of cats are the same species;
  // it doesn't vary from one cat to another
  static genusSpecies = 'Felis catus';

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  describe() {
    return `${this.name} is a ${Cat.genusSpecies}`;
  }
}
