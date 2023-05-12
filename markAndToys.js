function maximumToys(prices, k) {
    // Write your code here
    let sum=0;
    let count=0;
    prices.sort(function(a,b){
        return a-b
    })
    for(let i=0;i<prices.length;i++){
        if(sum<=k){
            sum+=prices[i]
            count++;
        }
    }
    return count-1
}

console.log(maximumToys([1,12,5,111,200,1000,10],50))
