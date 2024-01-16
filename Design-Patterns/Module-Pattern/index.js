/**
 * The Module Pattern ensures private and public encapsulation in JavaScript,
 * protecting the global namespace and diminishing naming conflicts.
 */
const myModule = (() => {
  const privateVariable = 'I am private!';
  const privateMethod = () => 'I am a private method!';

  return {
    publicVariable: 'I am public!',
    publicMethod: () => {
      console.log(privateMethod());
    },
  };
})();

const counter = (() => {
  let count = 1;

  return {
    getCount: () => count,
    increment: () => count++,
  };
})();

// Can't access myModule's privateVariable nor counter's count in global scope.
