/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {

    const actual = 1 << k;

    if (s.length - k + 1 < actual)
        return false;

    const set = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        set.add(s.substring(i, i + k));
    }

    return set.size === actual;
};