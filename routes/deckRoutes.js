const express = require('express')
const router = express.Router();

const deck = require('../data/deck');



router.get('/',(req,res)=>{
    
  res.json(deck);
});

router.get('/:id',(req,res)=>{
  const decks = deck.find((u) => u.id == req.params.id);
  console.log(decks);
  //if the user exists display the json data
  if (decks) res.json(decks);
  else next();
})

module.exports = router;