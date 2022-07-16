alert('Goog morning');


function minPermutation(n) {
    if(n < 0){
        let arr = String(n).split('');
        let newArr = arr.sort((a, b) => a - b);
        if(newArr[1] == 0){
            [newArr[1], newArr[2]] = [newArr[2], newArr[1]];
        }
        newArr.shift();
        let num = newArr.join('');
        console.log(-(+num));
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

