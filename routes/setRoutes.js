const express = require('express')
const router = express.Router();

const set = require('../data/set');



router.get('/',(req,res)=>{
    
    res.json(set);
});

router.get('/:id',(req,res)=>{
    const sets = set.find((u) => u.id == req.params.id);
    console.log(set);
   
    if (sets) res.json(sets);
    else next();
})

module.exports = router;