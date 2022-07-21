// require('@babel/register');

const express = require('express');

// Полключение реакта и реактДом:
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

const { sequelize } = require('./db/models');
const app = express();

// Добавить в папку config или в файл app.js:
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT ?? 3000;

// Routing
// app.use('/', mainRouter);
// app.use('/orders', orderRouter);

// Listen
app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    // await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});