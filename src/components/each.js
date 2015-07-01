'use strict';

/*
    Will call the iterator method over each element in the collection.
    If the interator returns false the loop will be aborted.
    If an optional scope object is passed it will be set to the interator's this argument
*/
module.exports = function (iterator, scope) {
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
