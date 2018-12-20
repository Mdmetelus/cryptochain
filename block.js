
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    //map for the function argument {} in the constuctor.
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    };

   static genesis() {
        return new this(GENESIS_DATA);
        // or return new Block(GENESIS_DATA);
    }


    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        // return new Block();
        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp,lastHash, data)
        });
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