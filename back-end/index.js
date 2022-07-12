require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./src/app');

const port = parseInt(process.env.APP_PORT ?? '5000', 10);

const { DB_URL } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.warn(`Server is listening on ${port}`);
  }
});
