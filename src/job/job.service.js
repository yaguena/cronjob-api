const JobEntity = require('./job.schema');

 class JobService {
  findOne(code) {
    let data = JobEntity.findOne({code});
    return data;
  }

  findAll() {
    let datas = JobEntity.find({});
    return datas;
  }

  create(data) {
    return new JobEntity(data).save();
  }

  update(code, data) {
    JobEntity.updateOne({code}, data);
    return this.findOne(code);
  }
};

module.exports = new JobService();
