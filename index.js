//Starting Base
console.log('Tetris');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

//imports 

const cards = require("./data/leaders");




//Home========================
app.get("/", (req, res) => {
    res.send("Welcome");
  });



//Card ====================================
app.get('/api/cards',(req,res)=>{
    
    res.json(cards);
});

app.get('/api/cards/:id',(req,res)=>{
    const card = cards.find((u) => u.id == req.params.id);
    console.log(card);
    //if the user exists display the json data
    if (card) res.json(card);
    // else next();
})


//MiddleWare=====================




// //error handling middleware===============
// app.use((err, req, res, next)=>{
//     res.status(500).send(err.message)
// })



///Sever_connection=============================
app.listen(port,()=>{
    console.log('We are online');
})

