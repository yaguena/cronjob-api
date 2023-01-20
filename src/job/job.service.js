const JobEntity = require('./job.schema');

 class JobService {
  create(data) {
    return new JobEntity(data).save();
  }

  findAll() {
    return JobEntity.find({});
  }

};

module.exports = new JobService();
