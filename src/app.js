const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
console.log(`get key in infisical:cloud ${process.env.MONDODB_URL}`)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
