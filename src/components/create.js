'use strict';

/*
    Will instantiate a DOM object from the provided string
*/
module.exports = function (elementString) {
    var tmp = this.document.implementation.createHTMLDocument();
    tmp.body.innerHTML = elementString;

    this.elements.push(tmp.body.children[0]);
    return this;
};
