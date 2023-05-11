function marsExploration(s) {
    // Write your code here
    len=s.length
    let msg ="SOS"
    let createdMSg=""
    let noOfMsg=len/msg.length
    let count=0;
    for(let i=1;i<=noOfMsg;i++){
        createdMSg+=msg;
    }

    console.log(createdMSg)
    console.log(s)
    for(let j=0;j<len;j++){
        if(s.charAt(j)!=createdMSg.charAt(j)){
            count++
            console.log(`${s.charAt(j)} and ${createdMSg.charAt(j)}`)
        }
    }

    return count;
}


console.log(marsExploration("SOSSOT"))