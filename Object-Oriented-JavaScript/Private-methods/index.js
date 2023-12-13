class MyClass {
  #privateMethod() {
    console.log('Private method called!');
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const myClass = new MyClass();
myClass.publicMethod();

// !Anti-pattern: calling private method from outside the class
myClass.#privateMethod();
