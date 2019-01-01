
function probCalcs(ap,bp,cp,dp,ep,pbp){
    var calc = [[0,0,0,0,0,0],[0,0,0,0,0,0]];
    var num;
    var sum=0;
    a=1/ap;
    b=1/bp;
    c=1/cp;
    d=1/dp;
    e=1/ep;
    pb=1/pbp;

    for (ai=0; ai<=1; ai++){
        for (bi=0; bi<=1; bi++){
            for (ci=0; ci<=1; ci++){
                for (di=0; di<=1; di++){
                    for (ei=0; ei<=1; ei++){
                        for (pbi=0; pbi<=1; pbi++){
                            num = ai+bi+ci+di+ei;
                            calc[pbi][num]+=(1-ai-a*(1-2*ai))*(1-bi-b*(1-2*bi))*(1-ci-c*(1-2*ci))*(1-di-d*(1-2*di))*(1-ei-e*(1-2*ei))*(1-pbi-pb*(1-2*pbi));
                        }
                    }
                }
            }
        }
    }
    for (i=0; i<=1; i++){
        for (j=0; j<=5; j++){
            sum+=calc[i][j];
        }
    }
    console.log(sum);
    return calc;
}

function oneIn(a,b,c,d,e,pb){
    var calc = probCalcs(a,b,c,d,e,pb);
    for (i=0; i<=1; i++){
        for (j=0; j<=5; j++){
            calc[i][j]=1/calc[i][j];
        }
    }
    return calc;
}

function drawBallTest (n){
    var testmat = [[0,0,0,0,0,0],[0,0,0,0,0,0]];
    var matches = 0;
    var timetest = new Date();

    for (var j = 0; j < n; j++){
        pullBalls();
        //debugger;
        for (var i = 0; i <= 5; i++){
            if (player.matchArr[i]) matches += 1;
        }
        if (player.matchArr[5]) {
            testmat[1][matches-1]+=1;
        } else {
            testmat[0][matches]+=1;
        }
        matches = 0;
        refreshPool();
    }
    console.log(new Date()-timetest);
    return testmat;
}

function xpLoop(x){
    var max = 137;
    var n = x;
    if (n>max) n-=max;
    updateXP(n,max);
    n++;
    window.setTimeout(function(){xpLoop(n);}, 15);
}


function cheat(){
    player.money += 1e30;
    player.xp += 1e20;
}