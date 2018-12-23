const crypto = require('crypto');
// const hexToBinary = require('hex-to-binary');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    hash.update(inputs.sort().join(' '));

    // return hexToBinary(hash.digest('hex'));
    //has returned in binary form instead of hexidecimal form as before;
    return hash.digest('hex');
};

module.exports = cryptoHash;