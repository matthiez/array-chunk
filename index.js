"use strict";

module.exports = function(sourceArray, chunkCount) {
    var evenDistribution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var len = sourceArray.length;
    var out = [];
    var i = 0;
    var size = void 0;

    if (chunkCount < 2) return [sourceArray];

    if (len % chunkCount === 0) {
        size = Math.floor(len / chunkCount);
        while (i < len) {
            out.push(sourceArray.slice(i, i += size));
        }
    } else if (evenDistribution) {
        while (i < len) {
            size = Math.ceil((len - i) / chunkCount--);
            out.push(sourceArray.slice(i, i += size));
        }
    } else {
        chunkCount--;
        size = Math.floor(len / chunkCount);
        if (len % size === 0) size--;
        while (i < size * chunkCount) {
            out.push(sourceArray.slice(i, i += size));
        }
        out.push(sourceArray.slice(size * chunkCount));
    }
    return out;
};