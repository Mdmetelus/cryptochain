const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

const PORT = 3000;
app.listen(PORT, () => { 
    // console.log('Server started, data: ', blockchain);
    console.log(`listening on localhost:${PORT}`)
});








// app.listen();
// var http = require('http')
//   , https = require('https')
//   , express = require('express')
//   , app = express();

// http.createServer(app).listen(80);
// https.createServer({ ... }, app).listen(443);