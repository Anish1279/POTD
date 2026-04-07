class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
    int n = triangle.size();
    int m = triangle[n-1].size();
    int dp[n][m];
    //Initalization
    for(int j=0;j<m;j++){
        dp[n-1][j]=triangle[n-1][j];
    }
    for(int i=n-2;i>=0;i--){
     for(int j=0;j<=i;j++){
        int down = dp[i+1][j];
        int diag = dp[i+1][j+1];
        dp[i][j]=min(down,diag)+triangle[i][j];
     }
    }
    return dp[0][0];
    }
};