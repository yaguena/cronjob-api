const express = require('express');
const DataBase = require("./config/database");

const RouterConfig = require('./config/routes');

const init = () => {
  const app = express();
  app.use(express.json());

  app.use(RouterConfig.create());
  DataBase.config();

  console.info(process.env.MONDODB_URL);

  app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`);
  });
};

init();