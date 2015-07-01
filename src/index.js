'use strict';


var Dom = function (elements) {
    if (!(this instanceof Dom)) {
        return new Dom(elements);
    }

    this.elements = elements || [];
    this.document = document;
};

Dom.prototype.create = require('./components/create');

Dom.prototype.each = require('./components/each');

Dom.prototype.prop = require('./components/prop');

module.exports = Dom;
