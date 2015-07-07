'use strict';

/*
    Will extract node elements from list and return them as array
*/
module.exports = function (nodeList) {
    var arr = [],
        i = nodeList.length - 1;

    for (i; i >= 0; i--) {
        arr.unshift(nodeList[i]);
    }

    return arr;
};
