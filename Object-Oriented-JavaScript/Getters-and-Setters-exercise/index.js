/*
 * Create a class UserProfile that encapsulates a user's profile information.
 *
 * This class should have fields for username, email, and birthdate. Use getters
 * and setters to validate that the username is a non-empty string, the email
 * includes an '@' symbol, and the birthdate is a valid date string.
 *
 * If the username is an empty string or no a string - throw an error with the
 * message 'Invalid username.'
 *
 * If the email does not include a @ character - throw an error with the message
 * of 'Invalid email.'
 *
 * If the birthdate is no a valid date string (for example '1990-01-01') - throw
 * an error with the message of 'Invalid birthdate.'
 */

class UserProfile {
  constructor(username, email, birthdate) {
    this.setUsername(username);
    this.setEmail(email);
    this.setBirthdate(birthdate);
  }

  /**
   *
   * @param {string} newUsername
   */
  setUsername(newUsername) {
    if (!newUsername || typeof newUsername !== 'string') {
      throw new Error('Invalid username.');
    }

    this._username = newUsername;
  }

  /**
   *
   * @param {string} newEmail
   */
  setEmail(newEmail) {
    if (typeof newEmail !== 'string' || newEmail.indexOf('@') === -1) {
      throw new Error('Invalid email.');
    }

    this._email = newEmail;
  }

  /**
   *
   * @param {string} newBirthdate
   */
  setBirthdate(newBirthdate) {
    if (isNaN(Date.parse(newBirthdate))) {
      throw new Error('Invalid birthdate.');
    }

    this._birthdate = newBirthdate;
  }

  set username(newUsername) {
    this.setUsername(newUsername);
  }

  get username() {
    return this._username;
  }

  set email(newEmail) {
    this.setEmail(newEmail);
  }

  get email() {
    return this._email;
  }

  set birthdate(newBirthdate) {
    this.setBirthdate(newBirthdate);
  }

  get birthdate() {
    return this._birthdate;
  }
}
