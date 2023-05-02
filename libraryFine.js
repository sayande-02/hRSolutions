function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine;
    if(y1===y2){
        if(m1===m2){
            if(d1===d2 || d1<d2){
                fine=0;
            }
            else{
                //d1>d2 fine applicable
                fine =15*(d1-d2);
            }
        }
        else if(m1<m2){
            fine=0;
        }
        else{
            //m1>m2 fine applicable
            //if(d1===d2 || d1<d2){
            fine=500*(m1-m2)
            //}
        }
    }
    else if(y1<y2){
        fine =0
    }
    else{
        //y1>y2 fine applicable
        fine=10000 
    }
    return fine

}

console.log(libraryFine(15,7,2014,1,7,2015))
