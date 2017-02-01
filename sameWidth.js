"use strict";

var LayoutQueue = require('layout-queue');

var SameWidth = (function () {

    function getBiggestWidth(selector) {
        var biggestWidth = 0;
        [].forEach.call(document.querySelectorAll(selector), function(element) { 
            if (element.clientWidth > biggestWidth) {
                biggestWidth = element.clientWidth;
            }
        });
        return biggestWidth;
    }

    function enqueue(selector) {
        LayoutQueue.add(unsetWidths, [selector]); 
        LayoutQueue.add(setWidths, [selector]); 
    }

    function setWidths(selector) {
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
    
    return {
        init: function (selector) {
            enqueue(selector);
        },
        set: function (selector) {
            setWidths (selector);
        },
        unset: function (selector) {
            unsetWidths(selector);
        }
    }  
})();

module.exports = SameWidth;