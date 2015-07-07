'use strict';

var nodeToArray = require('../utils/nodeListToArray'),
    factory = require('../domFactory');
/*
    Will instantiate a DOM object from the provided string
*/
module.exports = function (selector) {
    var tmpDoc = this.document.implementation.createHTMLDocument(),
        elements;

    this.each(function (elem) {
        tmpDoc.body.appendChild(elem);
    });

    elements = tmpDoc.querySelectorAll(selector);
    console.log(factory);
    return factory(nodeToArray(elements));
};
