function designerPdfViewer(h,word) {
    // Write your code here
    let alpha = new Map()
    let wordArr = new Array()
    let start ='a'
    for(let i=0;i<h.length;i++){
        alpha.set(start,h[i])
        start=String.fromCharCode(start.charCodeAt()+1)
    }
    //console.log(alpha)
    for(let i=0;i<word.length;i++){
        wordArr.push(arrayCreationWord(word.charAt(i)))
    }
    wordArr.sort();
    return wordArr[wordArr.length-1]*word.length;
    //console.log(wordArr)
    function arrayCreationWord(char){
        for(let[key,value] of alpha.entries()){
            if(key===char){
                return value
            }
        }
    }
    
}

