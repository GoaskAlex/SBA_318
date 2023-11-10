//Starting Base
console.log('Tetris');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

//imports 

const deck = require ("./routes/deckRoutes");
const leaders = require ('./routes/leadersRoutes');
const set = require ('./routes/setRoutes');
const  compression = require ('compression')








//Home========================
app.get("/", (req, res) => {
    res.send("Welcome".repeat(100000));
  });

//MiddleWare=====================
//leader ====================================
app.use('/api/leaders', leaders)

//deck
app.use('/api/deck', deck);

//set
app.use('/api/set', set)










//error handling middleware===============
app.use((err, req, res, next)=>{
     res.status(500).send(err.message)
})



///Sever_connection=============================
app.listen(port,()=>{
    console.log('We are online');
})

