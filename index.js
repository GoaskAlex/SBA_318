//Starting Base
console.log('Tetris');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

//imports 

const cards = require("./data/cards");




//Home
app.get("/", (req, res) => {
    res.send("Welcome");
  });
app.get('/./data',(req,res)=>{
    res.send('cards');
});



//MiddleWare=====================




// //error handling middleware===============
// app.use((err, req, res, next)=>{
//     res.status(500).send(err.message)
// })



///Sever_connection=============================
app.listen(port,()=>{
    console.log('We are online');
})

