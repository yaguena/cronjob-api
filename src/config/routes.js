const express = require("express");
const JobController = require('../job/job.controller');

module.exports = class RouterConfig {
  static create() {
    let routes = express.Router();
    let jobController = new JobController();
    routes.get("/jobs", jobController.findAll);
    routes.get("/jobs/:code", jobController.findOne);
    routes.post("/jobs", jobController.create);
    routes.put("/jobs/:code", jobController.update);

    return routes;
  }
};