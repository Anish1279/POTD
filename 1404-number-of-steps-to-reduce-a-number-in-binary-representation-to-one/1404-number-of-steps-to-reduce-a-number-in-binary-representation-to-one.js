/**
 * @param {string} s
 * @return {number}
 */
const numSteps = s => {
    let steps = 0, carry = 0;

    for (let i = s.length - 1; i > 0; i--) {
        if (((s.charCodeAt(i) & 1) + carry) & 1) {
            steps += 2;
            carry = 1;
        } else
            steps += 1;
    }

    return steps + carry;
};