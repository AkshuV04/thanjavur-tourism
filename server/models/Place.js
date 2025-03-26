const mongoose = require('mongoose');
const slugify = require('slugify'); 

const PlaceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true }, 
    description: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false }
});


PlaceSchema.pre('save', function (next) {
    if (this.name) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

module.exports = mongoose.model('Place', PlaceSchema);
