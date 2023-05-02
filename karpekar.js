function kaprekarNumbers(p,q) {
    // Write your code here
    let digit,sq,l,r
    let vals=new Array()
    for(i=p;i<=q;i++){
        digit = i.toString().length;
        sq=Math.pow(i,2)
        r=parseInt(sq.toString().substring(sq.toString().length-digit,sq.toString().length))
        l=parseInt(sq.toString().substring(0,sq.toString().length-digit))
        if(l===0 || r===0){
            continue
        }
        else if((l+r)===i || i===1){
            vals.push(i)
        }
    }

    if(vals.length===0){
        console.log("INVALID RANGE")
    }
    else{
        let op=vals.join(' ');
        console.log(op)
    }
    
    
    
}

kaprekarNumbers(1000,10000)