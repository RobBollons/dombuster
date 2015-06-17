'use strict';

var dom    = require('./../../lib/index'),
    expect = require('chai').expect;

describe('create', function () {
    it('creates a dom object from a string', function () {
        var anchorText = dom(document)
                            .create('<a>Text</a>')
                            .elements[0]
                            .innerHTML;

        expect(anchorText).to.equal('Text');
    });
});
// TODO: Create a new work item for this
//describe('find', function () {
//    it('finds an element ', function () {
//        var domObj = dom(document)
//                        .create('<a>Text</a><a class=".text2">Text 2</a>')
//                        .filter('.text2');
//        console.log(domObj);
//        expect(domObj.elements[0].innerHTML).to.equal('Text 2');
//    });
//});
