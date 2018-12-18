describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash = bar-hash;
    const date = ['Blockchain', 'data'];
    const block = new Block({
        timestamp = timestamp,
        lastHash = lastHash,
        hash = hash,
        data = data,
    });

    // const block = new Block({
    //     timestamp,
    //     lastHash,
    //     hash,
    //     data,
    // });

    it('has a timestamp, lastHash, hash, and data property', () => {
        //should only be on expect statment per it function 
        // not 4 like in this test.
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.date).toEqual(date);
    });
});