//Starting Base
console.log('Tetris');
const express = require('express');
const app = express();
const port = 3000;



//imports 

const deck = require ("./routes/deckRoutes");
const leaders = require ('./routes/leadersRoutes');
const set = require ('./routes/setRoutes');





/// view engine

app.set('view engine','ejs');



//Home and Render========================
app.get("/", (req, res) => {
    res.render('temp',{id1:"1", name1:"Erika", craft1:"Swordcraft",id2:"2", name2:"Itsurgi", craft2:"Bloodcraft",id3:"3", name3:"Kagero", craft3:"Shadowcraft" });
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

