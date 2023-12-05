const key = 'species';

const pet = {
  species: 'Dog',
  name: 'Elton',
  age: 1.5,
};

// Properties that don't exist evaluate to undefined
console.log('pet.unknown:', pet.unknown);

// All keys get "stringified"
pet[true] = 'hello'; // -> pet["true"]

// Values can be any primitive value-type, functions, objects, whatever.
pet.friends = [];

pet.bark = function () {
  return 'Woof! Woof!';
};
