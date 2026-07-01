class Solution {
public:
    int numberOfSubstrings(string s) {
    vector<int>lsidx(3,-1);//last seen idx of a,b,c 
    int cnt=0;
    for(int i=0;i<s.size();i++){
        lsidx[s[i]-'a'] = i;
        int minidx = min(min(lsidx[0],lsidx[1]),lsidx[2]);
        if(minidx!=-1)cnt+=minidx+1;
    }
    return cnt;
    }
};