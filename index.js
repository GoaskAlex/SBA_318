//Starting Base
console.log('Tetris');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

//imports 

const deck = require ("./data/deck");
const leaders = require ('./data/leaders');
const set = require ('./data/set');




//Home========================
app.get("/", (req, res) => {
    res.send("Welcome");
  });



//leader ====================================
app.get('/api/leaders',(req,res)=>{
    
    res.json(leaders);
});

app.get('/api/leaders/:id',(req,res)=>{
    const leader = leaders.find((u) => u.id == req.params.id);
    console.log(leader);
    //if the user exists display the json data
    if (leader) res.json(leader);
    else next();
})


//deck
app.get('/api/deck',(req,res)=>{
    
    res.json(deck);
});

app.get('/api/deck/:id',(req,res)=>{
    const decks = deck.find((u) => u.id == req.params.id);
    console.log(decks);
    //if the user exists display the json data
    if (decks) res.json(decks);
    else next();
})


//set
app.get('/api/set',(req,res)=>{
    
    res.json(set);
});

app.get('/api/set/:id',(req,res)=>{
    const sets = set.find((u) => u.id == req.params.id);
    console.log(set);
    //if the user exists display the json data
    if (sets) res.json(sets);
    else next();
})


//MiddleWare=====================




//error handling middleware===============
app.use((err, req, res, next)=>{
     res.status(500).send(err.message)
})



///Sever_connection=============================
app.listen(port,()=>{
    console.log('We are online');
})

