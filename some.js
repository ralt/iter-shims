"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.some) {
        return Array.prototype.some.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return true;
            }
        }

        return false;
    }
};
