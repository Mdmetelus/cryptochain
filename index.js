const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const Blockchain = require('./blockchain');
const PubSub = require('./pubsub');

const app = express();
const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

// setTimeout(() => pubsub.broadcastChain(), 1000);
// console.log('working');

app.use(bodyParser.json());

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});
app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });
    pubsub.broadcastChain();

    res.redirect('/api/blocks');
});


const syncChains = () => {
    request({ url: `${ROOT_NODE_ADDRESS}/api/blocks`}, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            const rootChain = JSON.parse(body);

            console.log('REPLACE CHAIN on a ****SYNC**** with ', rootChain);

            blockchain.replaceChain(rootChain);
        }
    });
};

let PEER_PORT;
if(process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()* 2000)
}
const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => { 
    // console.log('Server started, data: ', blockchain);
    console.log(`listening on localhost:${PORT}`)
    if (PORT !== DEFAULT_PORT) {
        syncChains();
    }
});



 




// app.listen();
// var http = require('http')
//   , https = require('https')
//   , express = require('express')
//   , app = express();

// http.createServer(app).listen(80);
// https.createServer({ ... }, app).listen(443);