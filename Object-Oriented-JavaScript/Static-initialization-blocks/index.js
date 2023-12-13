class DatabaseConnection {
  static connection;

  // This block is executed when the class first loads.
  static {
    if (process.env.NODE_ENV === 'production') {
      // The keyword "this" inside this block will refer to the actual class
      this.connection = this.loadProductionConnection();
    }

    this.loadDevelopmentConnection();
  }

  static loadProductionConnection() {}

  static loadDevelopmentConnection() {}
}
