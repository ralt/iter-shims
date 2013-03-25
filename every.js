"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.every) {
        return Array.prototype.every.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === false) {
                return false;
            }
        }

        return true;
    }
};
