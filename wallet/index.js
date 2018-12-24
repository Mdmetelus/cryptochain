const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');
const cryptoHash = require('../util/crypto-hash');

class Wallet{
    constructor() {
        this.balance = STARTING_BALANCE;
        // this.publicKey = '';

        //result of calling ec.gen keypair
        this.keyPair = ec.genKeyPair();

        this.publicKey = this.keyPair.getPublic().encode('hex');
        
    }


    sign(data) {
        return this.keyPair.sign(cryptoHash(data))
    }

    // verifySigniture() {

    // }
}

module.exports = Wallet;