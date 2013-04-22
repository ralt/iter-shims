"use strict";

module.exports = function(arr, callback, initial) {
    if (Array.prototype.reduce) {
        return Array.prototype.reduce.call(arr, callback, initial);
    }

    var result = arr[0];

    if (initial !== undefined) {
        result = callback(initial, arr[0], 0, arr);
    }

    for (var i = 1, l = arr.length; i < l; i++) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
};
