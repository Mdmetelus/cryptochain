const bodyParser = require('body-parser');
const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();
app.use(bodyParser.json());

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});
app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    res.redirect('/api/blocks');
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