const express = require("express");
const JobController = require('../job/job.controller');

module.exports = class RouterConfig {
  static create() {
    let routes = express.Router();
    let jobController = new JobController();
    routes.get("/jobs", jobController.findAll);
    routes.post("/jobs", jobController.create);
    return routes;
  }
};