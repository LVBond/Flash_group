require('@babel/register');
const express = require('express');

// Полключение реакта и реактДом:

const { sequelize } = require('./db/models');
const mainRoute = require('./routes/main.route');

const app = express();
const config = require('./config/config');
// Полключение реакта и реактДом:

const PORT = process.env.PORT ?? 3000;
config(app);

app.use('/', mainRoute);

app.get('/', (req, res) => {
  // const main = React.createElement(Main, { title: "Express" });
  // const html = ReactDOMServer.renderToStaticMarkup(main);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
  // res.send('respond with a resource');
});
app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
