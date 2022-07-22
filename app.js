require('@babel/register');
const express = require('express');
const mainRoute = require('./routes/main.route');

const app = express();
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;
config(app);

app.use('/', mainRoute);

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
