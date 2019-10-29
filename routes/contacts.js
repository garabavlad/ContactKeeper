const express = require('express');

const router = express.Router();

// @route       GET api/contacts
// @desc        Get the user contacts
// @access      Private
router.get('/', (req, res) => {
	res.send('Gets user contacts');
});

// @route       POST api/contacts
// @desc        Adds new contact
// @access      Public
router.post('/', (req, res) => {
	res.send('Adds new contact');
});

// @route       PUT api/contacts/:id
// @desc        Updates a contact
// @access      Private
router.put('/:id', (req, res) => {
	res.send('Updates a contact');
});

// @route       DELETE api/contacts/:id
// @desc        Deletes a contact
// @access      Private
router.delete('/:id', (req, res) => {
	res.send('Deletes a contact');
});

module.exports = router;
