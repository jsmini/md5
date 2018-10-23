var expect = require('expect.js')

var base = require('../dist/index.js')

describe('单元测试', function() {
    this.timeout(1000)

    describe('正确加密', function() {
        it('test: a', function() {
            expect(base('a')).to.equal('0cc175b9c0f1b6a831c399e269772661')
        })
        it('test: _', function() {
            expect(base('_')).to.equal('b14a7b8059d9c055954c92674ce60032')
        })
    })

    describe('错误处理', function() {
        it('test: 空值', function() {
            try {
                expect(base())
            } catch (err) {
                expect(err.message).to.equal('Missing required parameters.')
            }
        })
    })
})
