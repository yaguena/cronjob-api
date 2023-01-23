module.exports = class BaseException extends Error {
  constructor(message) {
    this.message = message;
  }
}
