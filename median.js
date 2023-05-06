function findMedian(arr) {
    // Write your code here
    arr.sort(function(a,b){
        return a-b;
    })

    let med = Math.ceil(arr.length/2)
    return arr[med-1]
}
