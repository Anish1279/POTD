/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = A => {
    const n = A.length;
    const freq = new Uint32Array(n + 1);

    for (const c of A)
        freq[Math.min(c, n)]++;

    let res = 1;
    for (let i = 2; i <= n; i++)
        res = Math.min(res + freq[i], i);

    return res;
};