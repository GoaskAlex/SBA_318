const express = require('express')
const router = express.Router();

const leaders = require('../data/leaders');


router.get('/',(req,res)=>{
    
    res.json(leaders);
});


router.get('/:id',(req,res)=>{
    const leader = leaders.find((u) => u.id == req.params.id);
    console.log(leader);
    //if the user exists display the json data
    if (leader) res.json(leader);
    else next();
})





module.exports = router;