(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var Dom = function (elements) {
    if (!(this instanceof Dom)) {
        return new Dom(elements);
    }

    this.elements = elements;
};

Dom.prototype.create = function (elementString) {
    var tmp            = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = elementString;
    return new Dom(tmp.body.children);
};

// TODO: Creare a new work item for this
//Dom.prototype.find = function (selector) {
//    var tmp            = document.implementation.createHTMLDocument();
//    var matchedElements = this.elements.querySelectorAll(selector);
//    return new Dom(matchedElements);
//};

module.exports = Dom;

},{}]},{},[1]);
