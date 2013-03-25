"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.map) {
        return Array.prototype.map.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            ret.push(callback.call(context, arr[i], i, arr));
        }

        return ret;
    }
}
