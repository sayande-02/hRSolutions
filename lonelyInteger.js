function lonelyinteger(a) {
    // Write your code here
    let count = {};
    if(a.length===2){
         return a[0]
    }
    else{
        for (let element of a) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
            }
        }
    }
    let vals=Object.keys(count)
    let c;
    vals.forEach((vals)=>{
        if(count[vals] ===1){
            c=vals;
        }
    })
    return c
}

console.log(lonelyinteger([34,95,34,64,45,95,16,80,80,75,3,25,75,25,31,3,64,16,31]))