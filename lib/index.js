'use strict';


var Dom = function (elements) {
    if (!(this instanceof Dom)) {
        return new Dom(elements);
    }

    this.elements = elements;
};

Dom.prototype.create = function (elementString) {
    var tmp            = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = elementString;
    return new Dom(tmp.body.children);
};

// TODO: Creare a new work item for this
//Dom.prototype.find = function (selector) {
//    var tmp            = document.implementation.createHTMLDocument();
//    var matchedElements = this.elements.querySelectorAll(selector);
//    return new Dom(matchedElements);
//};

module.exports = Dom;
