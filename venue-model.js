const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  price: String,
  image: String,
  description: String,
  infrastructure: String,
  square_footage: String,
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;