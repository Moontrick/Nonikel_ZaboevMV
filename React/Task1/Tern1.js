let a = Math.floor(Math.random() * 100);
// (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log(a)
if(a > 10){
    if(a > 5){
        if((2 * a) + 1 > 4){
            console.log(5)
        }else{
            if(a % 2 == 0){
                console.log(6)
            }else{
                console.log(7)
            }
        }
    }else{
        if(a < 3){
            console.log(1)
        }else{
            if(2 * (a - 2) > 4){
                console.log(5)
            }else{
                if(a % 2 == 0){
                    console.log(6)
                }else{
                    console.log(7)
                }
            }
        }
    }
}else {
    if(a * 2 > 5){
        if((2 * a) + 1 > 4){
            console.log(5)
        }else{
            if(a % 2 == 0){
                console.log(6)
            }else{
                console.log(7)
            }
        }
    }else{
        if(a < 3){
            console.log(1)
        }else{
            if(2 * (a - 2) > 4){
                console.log(5)
            }else{
                if(a % 2 == 0){
                    console.log(6)
                }else{
                    console.log(7)
                }
            }
        }
    }
}


// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()