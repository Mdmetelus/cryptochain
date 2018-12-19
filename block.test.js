const Block = require('./block');

const { GENESIS_DATA } = require('./config');

describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['Blockchain', 'data'];
    // const block = new Block({
    //     timestamp = timestamp,
    //     lastHash = lastHash,
    //     hash = hash,
    //     data = data,
    // });
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data,
    });

    it('has a timestamp, lastHash, hash, and data property', () => {
        //should only be on expect statment per it function 
        // not 4 like in this test.
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        console.log('genesisBlock :', genesisBlock);

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });
        it('returns the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });
});