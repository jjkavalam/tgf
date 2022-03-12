# tgf

A Node.js parser for the [TGF (Trivial Graph Format)](https://en.wikipedia.org/wiki/Trivial_Graph_Format)

## Usage

```js
const parse = require("@jjkavalam/tgf");

const fs = require("fs");

const tgf = fs.readFileSync("g1.tgf", { encoding: "utf-8" });
console.log(parse(tgf))
```

Gives the following output (sample):

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

## Related tools

- [yEd Graph editor](https://www.yworks.com/products/yed)
