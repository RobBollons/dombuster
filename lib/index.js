'use strict';


var Dom = function (elements) {
    if (!(this instanceof Dom)) {
        return new Dom(elements);
    }

    this.elements = elements || [];
    this.document = document;
};

Dom.prototype.create = function (elementString) {
    var tmp = this.document.implementation.createHTMLDocument();
    tmp.body.innerHTML = elementString;

    this.elements.push(tmp.body.children[0]);
    return this;
};

/*
	Will call the iterator method over each element in the collection.
	If the interator returns false the loop will be aborted.
	If an optional scope object is passed it will be set to the interator's this argument
*/
Dom.prototype.each = function (iterator, scope) {
    if (!(iterator instanceof Function)) {
        return this;
    }

    var i,
        fnScope,
        fn;

    for (i = 0; i < this.elements.length; i++) {
        fnScope = scope || this;
        fn = iterator.bind(fnScope, this.elements[i], i);

        if (fn() === false) {
            break;
        }
    }

    return this;
};

// TODO: Creare a new work item for this
//Dom.prototype.find = function (selector) {
//    var tmp            = document.implementation.createHTMLDocument();
//    var matchedElements = this.elements.querySelectorAll(selector);
//    return new Dom(matchedElements);
//};

module.exports = Dom;
