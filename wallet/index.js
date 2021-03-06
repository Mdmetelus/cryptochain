const Transaction = require('./transaction');
const { STARTING_BALANCE } = require('../config');
const { ec, cryptoHash } = require('../util');
// const cryptoHash = require('../util/crypto-hash');

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

    createTransaction({ recipient, amount }) {
        if ( amount > this.balance ) {
            throw new Error('Amount exceeds balance');
        }

        return new Transaction({ senderWallet: this, recipient, amount });
    }
}

module.exports = Wallet;