class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(newName) {
    if (!newName || typeof newName !== 'string') {
      return;
    }

    const [firstName, lastName] = newName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
