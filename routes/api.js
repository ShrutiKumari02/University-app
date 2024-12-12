const express = require('express');
const router = express.Router();
const axios = require('axios');
const Favourite = require('../models/Favourite');

// Fetch universities from the API
router.get('/universities', async (req, res) => {
  try {
    const { data } = await axios.get('http://universities.hipolabs.com/search?country=India');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching universities' });
  }
});

// Save a university as a favourite
router.post('/favourites', async (req, res) => {
  try {
    const { name, state_province, web_page } = req.body;
    await Favourite.create({ name, state_province, web_page });
    res.status(201).json({ message: 'Favourite added' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving favourite' });
  }
});

// Fetch favourites from the database
router.get('/favourites', async (req, res) => {
  try {
    const favourites = await Favourite.findAll();
    res.json(favourites);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching favourites' });
  }
});

module.exports = router;
