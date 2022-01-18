///mukammals sonni topish

function perfectNum(n){
    for (let index = 0 ; index < n; index++) {

        var temp = null;
       
        for (let i = 0; i < index; i++) {
            if (index % i === 0) {
                temp = temp + i;
            }
        }

        if (temp == index) {
            console.log(index);
        }  
    }
}
perfectNum(12200)