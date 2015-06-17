[![Build Status](https://travis-ci.org/RobBollons/dombuster.svg)](https://travis-ci.org/RobBollons/dombuster)
[![devDependency Status](https://david-dm.org/RobBollons/dombuster/dev-status.svg)](https://david-dm.org/RobBollons/dombuster#info=devDependencies)

# dombuster
Code is written using the Node-style Common JS module style and built using browserify.

## Testing
Testing is done using mocha with chai expect syntax.
The browser used to run the tests is phantomjs.

- [Methods](#methods)
  - [Each](#each)

## Methods

### Each
``` javascript
	dom().each(iteratorFN[, thisArg]);
```
This method will call an interator function for each element in the collection. It will pass the interator method the current element being iterated and its index. If the iterator returns false it will abort the iteration. If an optional scope object is passed this will be set to the iterators `this` property, otherwise it will be set to the current `dombuster` object.
Accepts: interator [fn], scope [object]

```javascript
	var testScope = {
		hi: 'you guys'
	};

	dom()
		.create('<a>test</a>')
		.create('<a>test2</a>')
		.create('<a>test3</a>')
		.each(function(item, index){
			console.log(item.innerHTML, index, this.hi);

			if(item.innerHTML === 'test2')
				return false; //abort the iteration on the second item
		}, testScope);
```