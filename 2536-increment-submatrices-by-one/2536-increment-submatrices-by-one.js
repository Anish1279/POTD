/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
const rangeAddQueries = (n, queries) => {
    const diff = Array.from({ length: n }, () => Array(n).fill(0));

    for (const [r1, c1, r2, c2] of queries) {
        diff[r1][c1]++;
        if (r2 + 1 < n) diff[r2 + 1][c1]--;
        if (c2 + 1 < n) diff[r1][c2 + 1]--;
        if (r2 + 1 < n && c2 + 1 < n) diff[r2 + 1][c2 + 1]++;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const above = i ? diff[i - 1][j] : 0;
            const left = j ? diff[i][j - 1] : 0;
            const diag = (i && j) ? diff[i - 1][j - 1] : 0;
            diff[i][j] += above + left - diag;
        }
    }

    return diff;
};
