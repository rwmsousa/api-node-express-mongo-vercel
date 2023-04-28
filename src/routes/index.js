const express = require('express'); // import express module
const router = express.Router(); // create an instance of express.Router()

const {
  getTrendsController,
} = require('../controllers/postsController'); // import postsController

// Routes for posts
router.get('/post/trends', getTrendsController);


module.exports = router; // export router
