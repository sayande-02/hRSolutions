function jimOrders(orders) {
    // Write your code here
    let row = orders.length;
    let delivery = new Array();
    let sum=0;
    for(let i=0;i<row;i++){
        sum=orders[i][0]+orders[i][1]
        delivery.push(sum)
        sum=0;
    }
    let delWithIndex=delivery.map((num,index)=>[num,index])
    delWithIndex.sort(function(a,b){
        return a[0]-b[0]
    })
    let delWithoutIndex=delWithIndex.map(([num,index])=>index+1)
   
    console.log(...delWithoutIndex)
    
}

jimOrders([[8,1],[4,2],[5,6],[3,1],[4,3]])