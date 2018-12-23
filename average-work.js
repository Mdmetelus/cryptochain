const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({ data: 'initial'});
// console.log('first block:  ', blockchain.chain[blockchain.chain.length-1]);
// this console logs the first block and we can view what its properties and keys are.

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i = 0;  i <10000; i++) {
    prevTimestamp = blockchain.chain[blockchain.chain.length -1].timestamp;

    blockchain.addBlock({ data: `block ${i}`});
    nextBlock = blockchain.chain[blockchain.chain.length-1];
    
    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff);

    average = times.reduce((total, eachNum) => (total + eachNum))/times.length;
    // current proof of work inplmentation with hexidecimal implementation instead of binary like bitcoin.
    console.log(`Time to mine block : ${timeDiff}ms.    Difficulty : ${nextBlock.difficulty}.   Average time : ${average}ms.   Index Block num : ${i} of 10,000 Blocks.`);


}