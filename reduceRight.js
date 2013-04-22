"use strict";

module.exports = function(arr, callback, initial) {
    if (Array.prototype.reduceRight) {
        return Array.prototype.reduceRight.call(arr, callback, initial);
    }

    var len = arr.length,
        result = arr[len - 1];

    if (initial !== undefined) {
        result = callback(initial, arr[len - 1], len - 1, arr);
    }

    for (var i = len - 2; i >= 0; i--) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
};
