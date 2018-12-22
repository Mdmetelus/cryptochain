
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

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
        let hash, timestamp;
        // const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const { difficulty } = lastBlock;
        let nonce = 0;
        // return new Block();

        do {
            nonce++;
            timestamp = Date.now();
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty );
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

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