function maximizingXor(l, r) {
    // Write your code here
    let max=0
    let xor;
    for(let i=l;i<=r;i++){
        for(let j=i+1;j<=r;j++){
        xor=i^j
        if(xor>max){
            max=xor
            }
        }
    }
    return max

}
console.log(maximizingXor(10,15))
