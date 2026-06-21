/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {

    const MAX_COST = 100000;

    const freq = new Array(MAX_COST + 1).fill(0);

    for (const cost of costs) {
        freq[cost]++;
    }

    let answer = 0;

    for (let cost = 1; cost <= MAX_COST; cost++) {

        if (freq[cost] === 0) continue;

        const canBuy = Math.min(freq[cost], Math.floor(coins / cost));

        answer += canBuy;

        coins -= canBuy * cost;
    }

    return answer;
};