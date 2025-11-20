export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, "Error1"],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error("Unknown error");
    }

    return this.errors.get(code);
  }
}
