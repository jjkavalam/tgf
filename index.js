function parse(contents) {
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

    sectionEdges.split("\n").forEach((edgeLine) => {
        if (!edgeLine) return;
        const [from, to] = edgeLine.split(" ");
        adjList[nodeMap[from]].push(nodeMap[to]);
    });
    return {
        nodes: Object.values(nodeMap),
        adjList,
    };
}

module.exports = parse;
