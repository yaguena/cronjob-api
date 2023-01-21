const JobEntity = require('./job.schema');

 class JobService {
  create(data) {
    return new JobEntity(data).save();
  }

  findAll() {
    let datas = JobEntity.find({});
    return datas;
  }
};

module.exports = new JobService();
