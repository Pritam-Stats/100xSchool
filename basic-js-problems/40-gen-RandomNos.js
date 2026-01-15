function genRandoms(min, max, n){
    let randomArray = [];
    for (let i = 0; i<n; i++){
        randomNum = Math.floor(Math.random()*(max - min +1)) + min;
        //max+1 to include 100
        // say min = 40, max = 100
        //max - min +1 will set the range [0,60] then +min will do [40,100]
        randomArray.push(randomNum);
    }
    return randomArray;
}

console.log(genRandoms(40, 100, 5))