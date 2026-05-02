class Solution {
public:
 
    bool IsValid(int num){
        string s = to_string(num);
        string sd="";
        for(auto ch:s){
            if(ch=='3'||ch=='4'||ch=='7')return false;
            char newch=ch;
            if(ch=='2')newch='5';
            else if(ch=='5')newch='2';
            else if(ch=='6')newch='9';
            else if(ch=='9')newch='6';
            sd+=newch;
        }
        return !(s==sd);
    }

    int rotatedDigits(int n) {
    int ans=0;
    for(int i=1;i<=n;i++){
        if(IsValid(i))ans++;
    }  
    return ans; 
    }
};