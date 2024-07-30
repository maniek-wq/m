const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  id: String,
  name: String,
  street: String,
  city: String,
  price: String,
  image: String,
  description: String,
  infrastructure: String,
  square_footage: String
});

const Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
