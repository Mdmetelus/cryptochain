const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');

class Wallet{
    constructor() {
        this.balance = STARTING_BALANCE;
        // this.publicKey = '';

        //result of calling ec.gen keypair
        const keyPair = ec.genKeyPair();

        this.publicKey = keyPair.getPublic().encode('hex');
        
    }
}

module.exports = Wallet;