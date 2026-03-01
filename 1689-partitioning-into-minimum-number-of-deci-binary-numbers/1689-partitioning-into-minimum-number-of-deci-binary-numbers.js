/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxDigit = 0;
    
    for (let i = 0; i < n.length; i++) {
        let digit = n[i] - '0';
        
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        
        if (maxDigit === 9) {
            break;
        }
    }
    
    return maxDigit;
};