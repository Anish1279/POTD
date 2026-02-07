/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = s => {
    let res = s.length;
    let a = 0, b = 0;

    for (const c of s)
        a += (c === 'a');

    for (const c of s) {
        a -= (c === 'a');
        res = Math.min(res, a + b);
        b += (c === 'b');
    }

    return res;
};
