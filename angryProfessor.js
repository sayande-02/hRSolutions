function angryProfessor(k, a) {
    // Write your code here
    let c=0;
    for(let i=0;i<a.length;i++){
        if(a[i]<=0){
            c++;
        }
    }
    
    let status =(k>c)?"YES":"NO"
    return status 
     
}
