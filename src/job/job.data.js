class JobData {
  constructor (data) {
    this.code = data.code;
    this.name = data.name;
    this.alias = data.alias;
    this.createdAt = data.createdAt;
  }

  static to(data) {
    return new JobData(data);
  }
}

module.exports = { JobData };
