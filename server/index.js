const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const PORT = 5000;
const router = require('./routes.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use('/product', router);

app.use(express.static(path.resolve(__dirname, '../static/')));

app.listen(PORT, () => {
  console.log('listening to port: ', PORT);
});
