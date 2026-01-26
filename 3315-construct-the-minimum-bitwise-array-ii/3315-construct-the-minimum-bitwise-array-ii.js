/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const ans = [];
    
    for (const num of nums) {
        // Special case: 2 is only even prime, impossible
        if (num === 2) {
            ans.push(-1);
            continue;
        }
        
        // Find rightmost 0-bit position
        for (let i = 0; i < 31; i++) {
            // Check if bit i is 0
            if (((num >> i) & 1) === 0) {
                // Clear bit i-1 (set to 0)
                ans.push(num & ~(1 << (i - 1)));
                break;
            }
        }
    }
    
    return ans;
};