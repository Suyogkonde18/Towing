const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/towing")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
    res.send('Welcome to the Contact API!');
})
app.listen(5000, () => console.log('Server running on port 5000'));
