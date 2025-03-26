const express = require('express');
const multer = require('multer');
const path = require('path');
const Place = require('../models/Place'); 
const { getAllPlaces, createPlace } = require('../controllers/placesController');

const cloudinary = require('../config/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = multer.diskStorage({
    destination: './uploads', 
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  const storage1 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'thanjavur_places', 
      format: async () => 'png', 
      public_id: (req, file) => file.fieldname + '-' + Date.now()
    }
  });
  
  const upload = multer({ storage });
  
  
  router.post('/places', upload.single('image'), async (req, res) => {
    try {
      const { name, description, location } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; 
  
      const newPlace = new Place({ name, description, location, imageUrl });
      await newPlace.save();
  
      res.status(201).json({ message: 'Place added successfully', place: newPlace });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  router.use('/uploads', express.static('uploads'));

const router = express.Router();
const { createPlace, getPlaces, getPlaceBySlug, updatePlace, deletePlace } = require('../controllers/placeControllers');

router.post('/', createPlace);
router.get('/', getPlaces);
router.get('/:slug', getPlaceBySlug);
router.put('/:slug', updatePlace);
router.delete('/:slug', deletePlace);

module.exports = router;



