module.exports = class JobData {
  constructor(data) {
    this.name = data.name;
    this.alias = data.alias;
    this.createdAt = data.createdAt;
  }
};
