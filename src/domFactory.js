'use strict';

var dom = require('./index');

module.exports = function (elements) {
    return Object.create(dom, {
        elements: {
            value: (elements || []),
            writeable: true,
            configurable: false
        },
        document: {
            value: document,
            writeable: false,
            configurable: false
        }
    });
};
