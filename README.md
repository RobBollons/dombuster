[![Build Status](https://travis-ci.org/RobBollons/dombuster.svg)](https://travis-ci.org/RobBollons/dombuster)
[![devDependency Status](https://david-dm.org/RobBollons/dombuster/dev-status.svg)](https://david-dm.org/RobBollons/dombuster#info=devDependencies)

# dombuster
Code is written using the Node-style Common JS module style and built using browserify.

## Testing
Testing is done using mocha with chai expect syntax.
The browser used to run the tests is phantomjs.

- [Methods](#methods)
  - [Each](#each)
  - [Prop](#prop)

## Methods

### Each
``` javascript
	dom().each(iteratorFN[, thisArg]);
```
Accepts: interator [fn], scope [object]


This method will call an interator function for each element in the collection. It will pass the interator method the current element being iterated and its index. If the iterator returns false it will abort the iteration. If an optional scope object is passed this will be set to the iterators `this` property, otherwise it will be set to the current `dombuster` object.

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

### Prop
``` javascript
    dom().prop(propName[, optional, property, arguments]);
```
This method will get or set a property on the internal elements collection.
The first argument `prop` is the name of the property to interrogate. If no other parameters are passed its value will be returned. Optionally an arbitrary number of arguments can be passed that are dependent on the property itself.


**NOTE:** When getting a property the property will be retrieved from the first element in the internal collection. When setting a property it will be applied to all elements in the internal collection.

```javascript
    /*
        Create a button,
        Add an on click handler to the button,
        In the click handler remove said handler and disable button,
        Throw exception if button not disabled.
    */
    var button = Dom().create('<button>test</button>');

    function clickHandler(){
        console.log('button clicked');
        button
            .prop('removeEventHandler', 'click', clickHandler)
            .prop('disabled', true);

        if (button.prop('disabled') !== true) {
            throw 'Button has not been disabled';
        }
    }

    button
        .prop('addEventListener', 'click', clickHandler);
```