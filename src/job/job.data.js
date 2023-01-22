const crypto = require('crypto');

const createCode = (value) => value ? 
  crypto
    .createHash('md5')
    .update(value)
    .digest("hex")
  : undefined;

class JobData {
  constructor (data) {
    this.name = data.name;
    this.code = data.code; 
    this.alias = data.alias;
    this.path = data.path;
    this.timer = data.timer;
    this.createdAt = data.createdAt;
  }

  static to(data) {
    return new JobData(data);
  }
}

class JobCreateData {
  constructor (data) {
    this.name = data.name;
    this.alias = data.alias;
    this.code = createCode(data.alias); 
    this.path = data.path;
    this.timer = data.timer;
    this.createdAt = data.createdAt;
  }

  static to(data) {
    console.info(data);
    return new JobCreateData(data);
  }
}

class JobUpdateData {
  constructor (data) {
    this.name = data.name;
    this.alias = data.alias;
    this.path = data.path;
    this.timer = data.timer;
  }

  static to(data) {
    console.info(data);
    return new JobUpdateData(data);
  }
}

module.exports = { JobData, JobCreateData, JobUpdateData };
