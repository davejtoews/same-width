"use strict";

var LayoutQueue = require('layout-queue');

function SameWidth(selector) {

    function getBiggestWidth(selector) {
        var biggestWidth = 0;
        [].forEach.call(document.querySelectorAll(selector), function(element) { 
            if (element.clientWidth > biggestWidth) {
                biggestWidth = element.clientWidth;
            }
        });
        return biggestWidth;
    }

    function setWidths(selector) {
        unsetWidths(selector);
        var biggestWidth = getBiggestWidth(selector);
        [].forEach.call(document.querySelectorAll(selector), function(element) {
            element.style.width = biggestWidth + 'px';
        });
    }

    function unsetWidths(selector) {
        [].forEach.call(document.querySelectorAll(selector), function(element) {
            element.style.width = "auto";
        });
    }
    
    LayoutQueue.add(setWidths, [selector]);        
}

module.exports = SameWidth;