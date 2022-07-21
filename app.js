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


const usersRouter = require('./routes/user/user.route');
app.use('/user', usersRouter);



// Listen
app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    // await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});






// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// const URI = process.env.MONGO_URI;

// // parse requests
// app.use(express.json());
// app.use(cors());

// // Connecting to DB
// mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true});
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
// })

// const usersRouter = require('./routes/user');

// app.use('/user', usersRouter);

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });