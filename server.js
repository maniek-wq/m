const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Venue = require('./venue.model');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/meetover', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/api/venues', async (req, res) => {
  try {
    const venue = new Venue(req.body);
    await venue.save();
    res.status(201).send('Venue added successfully');
  } catch (err) {
    console.error('Error adding venue:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
