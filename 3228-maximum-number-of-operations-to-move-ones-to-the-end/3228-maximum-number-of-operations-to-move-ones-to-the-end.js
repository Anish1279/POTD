const maxOperations = s => {
    let ones = 0, res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1')
            ones++;
        else if (i > 0 && s[i - 1] === '1')
            res += ones;
    }
    return res;
};