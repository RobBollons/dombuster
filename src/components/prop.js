'use strict';

/*
    Will get properties of the first element in the collection.
    Or will set the property of all elements in collection.
*/
module.exports = function () {
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
