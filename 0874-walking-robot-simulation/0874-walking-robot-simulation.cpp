class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
    set<pair<int,int>>st;
    for(auto vec:obstacles){
        st.insert({vec[0],vec[1]});
    }
    int dir=0,dist=0;
    int x=0,y=0;
    for(int i=0;i<commands.size();i++){

    if(commands[i]==-2){
        dir = (dir-1+4)%4;
    }
    else if(commands[i]==-1){
      dir = (dir+1)%4;
    }
    else{
    int k = commands[i];
    int dx=0,dy=0;
    if(dir==0){
        dy=1;
    }
    else if(dir==1){
        dx=1;
    }
    else if(dir==2){dy=-1;}
    else if(dir==3){dx=-1;}
    for(int i=0;i<k;i++){
    int nx=x+dx;
    int ny=y+dy;
    if(st.find({nx,ny})!=st.end())break;
    x=nx;
    y=ny;
    dist = max(dist,(x*x+y*y));
    }
    }
    }
    return dist;
    }
    };
