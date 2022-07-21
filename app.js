require('@babel/register');
const express = require('express');
const { sequelize } = require('./db/models');
const mainRoute = require('./routes/main.route');

const app = express();
const config = require('./config/config');
// Полключение реакта и реактДом:
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const PORT = process.env.PORT ?? 3000;
config(app);

app.use('/', mainRoute);

// Listen
app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    // await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
