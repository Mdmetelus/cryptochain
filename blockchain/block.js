
const { GENESIS_DATA, MINE_RATE } = require('../config');
const { cryptoHash } = require('../util');
const hexToBinary = require('hex-to-binary');

class Block {
    //map for the function argument {} in the constuctor.
    constructor({ timestamp, lastHash, hash, difficulty, nonce, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.difficulty = difficulty;
        this.nonce = nonce;
        this.data = data;

    };

   static genesis() {
        return new this(GENESIS_DATA);
        // or return new Block(GENESIS_DATA);
    }


    static mineBlock({ lastBlock, data }) {
        const lastHash = lastBlock.hash;
        let hash, timestamp;
        // const timestamp = Date.now();
        let { difficulty } = lastBlock;
        let nonce = 0;
        // return new Block();

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty );
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));
        //we wrap the call of hash in the hex to binary function 
        //to use the binary valies for difficulty chechs instead of the hex 
        //which will have less 00 per hash instance.

        return new this({
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty,
            hash
            // hash: cryptoHash(timestamp,lastHash, data, nonce, difficulty)
        });
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        const difference = timestamp - originalBlock.timestamp;

        if (difference > MINE_RATE ) return difficulty - 1 ;
        // if((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty -1;

        return difficulty + 1;
    }
}



module.exports = Block;




// test instance of this block with dummy vales.
// const block1 = new Block({
//     timestamp:'01/01/01',
//     lasthash:'foo-lastHash', 
//     hash:'foo-hash', 
//     data:'foo-data'
// });


// console.log('block1 :', block1);