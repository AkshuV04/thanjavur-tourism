const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    placeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
});

module.exports = mongoose.model('Contact', ContactSchema);
