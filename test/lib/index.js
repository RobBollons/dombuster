'use strict';

var dom    = require('./../../lib/index'),
    expect = require('chai').expect;

describe('create', function () {
    it('creates a dom object from a string', function () {
        var anchorText = dom()
                            .create('<a>Text</a>')
                            .elements[0]
                            .innerHTML;

        expect(anchorText).to.equal('Text');
    });
});

describe('each', function(){
	it('iterates each created element', function(){
		var elements = ['<a>Text1</a>', '<a>Text2</a>', '<a>Text3</a>'];
		dom()
			.create(elements[0])
			.create(elements[1])
			.create(elements[2])
			.each(function(elem, index){
				expect(elem.outerHTML).to.equal(elements[index]);
			});
	});
	it('sets correct scope', function(){
		function testScope(){

		}

		dom()
			.create('<a>test</a>')
			.each(function(){
				expect(this).to.be.an.instanceof(testScope);
			}, new testScope());
	});
	it('aborts loop', function(){
		var index,
			elements = ['<a>Text1</a>', '<a>Text2</a>', '<a>Text3</a>'];

		dom()
			.create(elements[0])
			.create(elements[1])
			.create(elements[2])
			.each(function(item, i){
				index = i;

				if(i == 1)
					return false;
			});

			expect(index).to.equal(1);
	});
})
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
