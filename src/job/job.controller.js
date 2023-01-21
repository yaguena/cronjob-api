const { JobData } = require('./job.data');
const jobService = require('./job.service');
module.exports = class JobController {

  async findAll(req, res) {
    let datas = await jobService.findAll();
    return res.json(datas.map((data) => JobData.to(data)))
  }

  async create(req, res) {
    let data = await jobService.create(req.body);
    return res.json(data);
  }
};
