class Block {
    //map for the function argument {} in the constuctor.
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    };
}

// test instance of this block with dummy vales.
// const block1 = new Block({
//     timestamp:'01/01/01',
//     lasthash:'foo-lastHash', 
//     hash:'foo-hash', 
//     data:'foo-data'
// });


// console.log('block1 :', block1);

module.exports = Block;


//issue with testin the block
// FAIL  ./block.test.js
// ● Test suite failed to run

//   /home/mdm/Documents/GitDownloadedFiles/cryptochain/block.js: Unexpected token (23:6)

//     Jest encountered an unexpected token
//     This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
//     By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
//     Here's what you can do:
//      • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
//      • If you need a custom transformation specify a "transform" option in your config.
//      • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
//     You'll find more details and examples of these config options in the docs:
//     https://jestjs.io/docs/en/configuration.html
//     Details:
//       21 | // console.log('block1 :', block1);
//       22 |
//     > 23 | module.exports = Block;
//          |       ^

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.394s
// Ran all test suites.

// Watch Usage: Press w to show more.