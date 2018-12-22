const MINE_RATE = 1000;
//1000 millisecs. = 1 sec.
const INITIAL_DIFFICULTY = 3;
//hard coded and global values:

// screan case syntax
const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '_____',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: [],
};

module.exports = {GENESIS_DATA, MINE_RATE };