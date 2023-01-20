const jobService = require('./job.service');
module.exports = class JobController {

  async findAll() {
    return jobService.findAll();
  }

  async create(req, res) {
    let data = await jobService.create(req.body);
    return res.json(data);
  }
};
