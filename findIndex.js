"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.find) {
        return Array.prototype.find.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return i;
            }
        }
    }
};
