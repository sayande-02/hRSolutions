function equalizeArray(arr) {
    // Write your code here
    let highFreq=0,highVal=0,freq,val;
    for(let i=0;i<arr.length;i++){
        freq=1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                freq++;
                val=arr[i];
            }
        }
        if(freq>highFreq){
            highFreq=freq;
            highVal=val;
        }
    }

    //console.log(`High Freq is ${highFreq} and High Val is ${highVal}`)
    return arr.length-highFreq

}

console.log(equalizeArray([3,3,2,1,3]))
