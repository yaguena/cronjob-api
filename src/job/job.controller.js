const { JobData, JobCreateData, JobUpdateData } = require('./job.data');
const jobService = require('./job.service');
module.exports = class JobController {

  async findAll(req, res) {
    let datas = await jobService.findAll();
    return res.json(datas.map((data) => JobData.to(data)));
  }

  async findOne(req, res) {
    let code = req.params.code;
    let data = await jobService.findOne(code);
    return res.json(JobData.to(data));
  }

  async create(req, res) {
    let data = await jobService.create(JobCreateData.to(req.body));
    return res.json(JobData.to(data));
  }

  async update(req, res) {
    let code = req.params.code;
    let data = await jobService.update(code, JobUpdateData.to(req.body));
    return res.json(JobData.to(data));
  }
};
