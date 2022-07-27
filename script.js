alert('Goog morning');


function minPermutation(n) {
    if(n < 0){
        let arr = String(n).split('');
        let newArr = arr.sort((a, b) => a - b);
        let numnull = 0;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == 0){
                numnull += 1;
            }
        }
        console.log(numnull);
        if(newArr[1] == 0){
            [newArr[1], newArr[2]] = [newArr[2], newArr[1]];
        }
        newArr.shift();
        if(numnull > 1){
            let j = 0;
            while (j< numnull){
                newArr.splice(1, 0, 0);
                j++;
            }
        };
        let num = newArr.join('');
        return -(+num);
    }else{
        let arr = String(n).split('');
        let newArr = arr.sort((a, b) => a - b);
        if(newArr[0] == 0){
            [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
        }
        let num = newArr.join('');
        return +num
    }
}



    /*function bonusTime(salary, bonus) {
    if(bonus==true){
      return "£"+salary*10
    }else{
      return "£"+salary
    }
    }*/
    const bonusTime = (salary, bonus) => bonus==true? "£"+salary*10 :"£"+salary;