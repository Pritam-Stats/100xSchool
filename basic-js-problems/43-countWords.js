function countWords(str){
    let arr = str.split(" ")
    let countObj = {}
    for (let x of arr){
        if (!(x in countObj)){
            countObj[x] = 1;
        }
        else {
            countObj[x] += 1;
        }
    }
    return countObj;
}

console.log(countWords("one two two three four one one four five"));