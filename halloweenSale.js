function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let total=0,i=0;
    while(total<=s){
        i++
        total+=p;
        if(p>m){
        p-=d
        }
        else{
            p=m;
        }
        console.log(`p is ${p} and total is ${total}`)   
    }   //console.log(i)
}
howManyGames(20,3,6,85)