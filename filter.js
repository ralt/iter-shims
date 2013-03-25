"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.filter) {
        return Array.prototype.filter.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr)) {
                ret.push(arr[i]);
            }
        }

        return ret;
    }
};
