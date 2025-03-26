const express = require('express');
const router = express.Router();
const { createContact, getContactsByPlace, updateContact, deleteContact } = require('../controllers/contactControllers');

router.post('/', createContact);
router.get('/:placeId', getContactsByPlace);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
