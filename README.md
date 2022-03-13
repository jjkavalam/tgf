# tgf

A Node.js parser for the [TGF (Trivial Graph Format)](https://en.wikipedia.org/wiki/Trivial_Graph_Format)

## Usage

```js
const parse = require("@jjkavalam/tgf");

const fs = require("fs");

const tgf = fs.readFileSync("g1.tgf", {encoding: "utf-8"});
```

Parsed result has the following features:

- `nodes: string[]`, array of nodes identified by label
- `adjList: {[string]: string[]}`, adjacency list representation of the graph
- `getWeight: function(string, string): number`, a function that returns the weight of each edge (or `undefined`)

A sample result:

```
{
  nodes: [
    '6', '3', '5',
    '2', '9', '7',
    '4', '8', '1'
  ],
  adjList: {
    '1': [ '2', '4' ],
    '2': [],
    '3': [ '6', '8' ],
    '4': [ '7' ],
    '5': [ '9' ],
    '6': [ '9' ],
    '7': [ '5', '6' ],
    '8': [],
    '9': []
  }
}
```

```
getWeight('1', '2')
=> 2
```

### Undirected graphs

The parser treats all edges in the TGF file as directed. Hence, to represent undirected graphs, two edges need to be
specified for each undirected edge.

But it is unlikely that your graph editor writes two edges for each undirected edge. Setting, `undirected` option will
cause the parser to compensate for this.

```js
parse(contents, {undirected: true})
```

## Related tools

- [yEd Graph editor](https://www.yworks.com/products/yed)
