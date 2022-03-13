function edgeKey(from, to) {
    return `${from}:${to}`
}

function parse(contents, opts = {}) {
    const undirected = opts.undirected || false
    const [sectionNode, sectionEdges] = contents.split("#");
    const nodeMap = {};
    sectionNode.split("\n").forEach((nodeLine) => {
        if (!nodeLine) return;
        const [id, label] = nodeLine.split(" ");
        nodeMap[id] = label;
    });

    const adjList = {};
    Object.values(nodeMap).forEach((label) => {
        adjList[label] = [];
    });

    const weightMap = {};
    sectionEdges.split("\n").forEach((edgeLine) => {
        if (!edgeLine) return;
        const [from, to, weight] = edgeLine.split(" ");
        adjList[nodeMap[from]].push(nodeMap[to]);
        weightMap[edgeKey(nodeMap[from], nodeMap[to])] = weight && Number(weight);
        if (undirected) {
            // add opposite edge alsoe
            adjList[nodeMap[to]].push(nodeMap[from]);
            weightMap[edgeKey(nodeMap[to], nodeMap[from])] = weight && Number(weight);
        }
    });
    return {
        nodes: Object.values(nodeMap),
        adjList,
        getWeight(from, to) {
            return weightMap[edgeKey(from, to)]
        }
    };
}

module.exports = parse;
