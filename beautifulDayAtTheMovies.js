function beautifulDays(i, j, k) {
    // Write your code here
    let rev,c=0;
    for(let x=i;x<=j;x++){
        rev=reverseNo(x)
        if((Math.abs(x-rev))%k===0){
            c++;
        }

    }
    return c;
    function reverseNo(i){
        let s=i.toString();
        return s.split("").reverse().join("")
        
    }
    
}

console.log(beautifulDays(20,23,6))
