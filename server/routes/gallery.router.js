const {response} = require('express');
const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

//database GET route
router.get('/', (req,res) => {
  console.log('get req to /gallery');
  queryText = `SELECT * "galleryItems" ORDER BY "description";`;
  pool.query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
  }).catch((error) => {
    console.log('Server error in Get', error);
    res.sendStatus(500);
  })
})

module.exports = router;