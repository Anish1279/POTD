class Solution {
public:
    vector<int> solveQueries(vector<int>& nums, vector<int>& queries) {
        int n = nums.size(); // Get the size of the nums array
        unordered_map<int, vector<int>> valueIndices; // Map to store indices for each value

        // Precompute indices for each value
        for (int i = 0; i < n; ++i) { // Loop through nums
            valueIndices[nums[i]].push_back(i); // Store index for the value
        }

        vector<int> result; // To store answers for each query

        for (int q : queries) { // Loop through each query
            int val = nums[q]; // Get the value at the query index
            const vector<int>& indices = valueIndices[val]; // Get all indices for this value

            if (indices.size() == 1) { // If only one occurrence
                result.push_back(-1); // No other index, so push -1
                continue; // Move to next query
            }

            int minDist = n; // Initialize minimum distance as max possible

            // Binary search to find the closest index
            auto it = lower_bound(indices.begin(), indices.end(), q); // Find the first index >= q

            // Check the next occurrence (wrap around if needed)
            int nextIdx;
            if (it == indices.end()) { // If at end, wrap to first
                nextIdx = indices[0];
            } else {
                nextIdx = *it;
            }
            if (nextIdx == q) { // If it's the same as query, move to next (wrap if needed)
                if (indices.size() == 2) {
                    nextIdx = indices[0] == q ? indices[1] : indices[0];
                } else {
                    int pos = it - indices.begin();
                    nextIdx = indices[(pos + 1) % indices.size()];
                }
            }
            if (nextIdx != q) { // Not the same index
                int dist = abs(nextIdx - q); // Direct distance
                dist = min(dist, n - dist); // Circular distance
                minDist = min(minDist, dist); // Update minimum distance
            }

            // Check the previous occurrence (wrap around if needed)
            int prevIdx;
            if (it == indices.begin()) { // If at the beginning, wrap to last
                prevIdx = indices.back();
            } else {
                prevIdx = *(it - 1);
            }
            if (prevIdx != q) { // Not the same index
                int dist = abs(prevIdx - q); // Direct distance
                dist = min(dist, n - dist); // Circular distance
                minDist = min(minDist, dist); // Update minimum distance
            }

            result.push_back(minDist == n ? -1 : minDist); // Store the minimum distance for this query, or -1 if not found
        }

        return result; // Return the result array
    }
};