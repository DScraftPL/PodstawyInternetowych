const express = require('express');
const app = express();
const port = 3000;
const crypto = require('crypto');
const cors = require('cors')

app.use(cors())

app.get('/',(req,res) => {
  var liczba = Math.floor(Math.random()*255); //od 0 do 10
  var wysylka = {};
  wysylka.liczba = liczba;
  wysylka.ciag = crypto.randomBytes(20).toString('hex');
  res.send(JSON.stringify(wysylka));
}) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
