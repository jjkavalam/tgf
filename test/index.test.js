const parse = require('../index')
const assert = require('assert')

describe('tgf parser', function () {
    it('constructs adj list', function () {
        const g = parse(`1 a\n2 b\n#\n1 2`)
        assert.deepStrictEqual(g.adjList['a'], ['b'])
    })
    it('reads edge weights', function () {
        const g = parse(`1 a\n2 b\n#\n1 2 10`)
        assert.deepStrictEqual(g.getWeight('a', 'b'), 10)
    })
    it('handles undirected graphs', function () {
        const g = parse(`1 a\n2 b\n#\n1 2 10`, {undirected: true})
        assert.deepStrictEqual(g.adjList, {'a': ['b'], 'b': ['a']})
        assert.deepStrictEqual(g.getWeight('b', 'a'), 10)

    })
})
