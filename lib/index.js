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

/*
    Will get properties of the first element in the collection.
    Or will set the property of all elements in collection.
*/
Dom.prototype.prop = function () {
    var args = Array.prototype.slice.call(arguments),
        prop = args[0],
        hasValues = args.length > 1;

    //Add empty element ready for later
    args.unshift(undefined);

    if (prop === undefined || typeof prop !== 'string') {
        throw 'Prop not defined or not a string';
    }

    if (hasValues === false) {
        return this.elements.length > 0 ? getter(this.elements[0], prop) : undefined;
    } else {
        this.each(function (elem) {
            //args contains extra parameters passed in that the property may require
            args[0] = elem;
            setter.apply(undefined, args);
        });

        return this;
    }

    function setter() {
        var setArgs = Array.prototype.slice.call(arguments),
            el = setArgs[0],
            prop = setArgs[1];

        //Shouldn't use splice on arguments array directly, it defeats optimizations in JavaScript engine, use clone.
        //Remove element and property values leaving any extra parameters need for the property itself.
        setArgs.splice(0, 2);

        if (typeof el[prop] === 'function') {
            el[prop].apply(undefined, setArgs);
        } else {
            el[prop] = setArgs[0];
        }
    }

    function getter(el, prop) {
        if (typeof el[prop] === 'function') {
            return el[prop]();
        } else {
            return el[prop];
        }
    }
};

// TODO: Creare a new work item for this
//Dom.prototype.find = function (selector) {
//    var tmp            = document.implementation.createHTMLDocument();
//    var matchedElements = this.elements.querySelectorAll(selector);
//    return new Dom(matchedElements);
//};

module.exports = Dom;
