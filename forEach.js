"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.forEach) {
        Array.prototype.forEach.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            callback.call(context, arr[i], i, arr);
        }
    }
};
