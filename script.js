alert('Goog j0b');

function minPermutation(n) {
    if(n < 0){
        let arr = String(n).split('');
        arr.shift();
        let newArr = arr.sort((a, b) => a - b);
        let numnull = 0;
        let c = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == 0){
                numnull += 1;
                c.push('0')
            }
        }
        let a = newArr.slice(numnull);
        let b = [a.shift()];

        let result = [...b,...c,...a];
        let num = result.join('');
        return -(+num);
    }else{
        let arr = String(n).split('');
        let newArr = arr.sort((a, b) => a - b);
        let numnull = 0;
        let c = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == 0){
                numnull += 1;
                c.push('0')
            }
        }
        let a = newArr.slice(numnull);
        let b = [a.shift()];

        let result = [...b,...c,...a];
        let num = result.join('');
        return +num
    }
}

function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

