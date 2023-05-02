function cutTheSticks(arr) {
    // Write your code here
    let alen=new Array()
    let min
    alen.push(arr.length)
    while(arr.length>1){
    arr.sort(function(a,b){
        return (a-b)
    });
    min=arr[0];
    let i=0;
    while(i<arr.length){
        if(arr[i]===min){
            arr.splice(i,1)
        }
        else{
            i++;
        }
        }
    if(arr.length!=0){    
    alen.push(arr.length)
    }
    }
    
    return alen
}

console.log(cutTheSticks([8,8,14,10,3,5,14,12]))