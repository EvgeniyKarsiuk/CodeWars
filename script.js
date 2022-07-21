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



//////
 Sum without highest and lowest number
 JavaScript:
     function sumArray(array)  {
   if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
         return sortedArray.reduce((acc, cur) => acc + cur, 0)
   }

    return 0
 }


function findMultiples(integer, limit) {
    return Array.from({length: parseInt(limit / integer)}, (_,index) => (index + 1) * integer)
}

function playerRankUp (points) {
    return points >= 100 ?
        "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." :
        false;



    const findMultiples=(integer, limit)=>
        Array.from({length: parseInt(limit/integer)},(_,index)=>(index + 1)*integer )


    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let duck = new Bird("Donald");
    let canary = new Bird("Tweety");
    
        let ownProps = [];

    for (let property in duck) {
        if(duck.hasOwnProperty(property)) {
            ownProps.push(property);
        }
    }

    console.log(ownProps);

    function mutation(arr) {
        let one = arr[1].toLowerCase().split('');
        let two = arr[0].toLowerCase().split('');
        console.log(one,two)
        for(let i = 0; i < one.length; i++){
            if (two.indexOf(one[i]) < 0)
                return false;
        }
        return true;
    }

    mutation(["hello", "hey"]);
    mutation(["hello", "Hello"]);
    mutation(["Mary", "Army"]);
    mutation(["Mary", "Aarmy"]);
    mutation(["Noel", "Ole"]); 