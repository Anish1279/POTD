/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
    const n = s.length;
    if (n !== goal.length) return false;

    const dfa = Array.from({ length: n }, () => new Int32Array(26));
    dfa[0][s.charCodeAt(0) - 97] = 1;

    let x = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 26; j++)
            dfa[i][j] = dfa[x][j];
        const c = s.charCodeAt(i) - 97;
        dfa[i][c] = i + 1;
        x = dfa[x][c];
    }

    let state = 0;
    for (let i = 0; i < n << 1; i++) {
        state = dfa[state][goal.charCodeAt(i % n) - 97];
        if (state === n)
            return true;
    }

    return false;
};