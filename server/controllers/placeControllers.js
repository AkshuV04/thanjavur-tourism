const Place = require('../models/Place');


exports.createPlace = async (req, res) => {
    try {
        const place = new Place(req.body);
        await place.save();
        res.status(201).json(place);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPlaceBySlug = async (req, res) => {
    try {
        const place = await Place.findOne({ slug: req.params.slug });
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json(place);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlace = async (req, res) => {
    try {
        const updatedPlace = await Place.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
        if (!updatedPlace) return res.status(404).json({ message: 'Place not found' });
        res.json(updatedPlace);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePlace = async (req, res) => {
    try {
        const deletedPlace = await Place.findOneAndDelete({ slug: req.params.slug });
        if (!deletedPlace) return res.status(404).json({ message: 'Place not found' });
        res.json({ message: 'Place deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
