function countCharsInStr(str){
    str = str.toLowerCase();
    let strArray = [];
    for (let x of str){
        if (x !== " "){
            strArray.push(x)
        }
    }
    //return strArray;
    //got the arr

    //count
    let countCharObj = {};
    for (let x of strArray){
        if (!(countCharObj.hasOwnProperty(x))){
            //if doesn't have the key yet
            countCharObj[x] = 1;
        }
        else {
            //increase the count
            countCharObj[x] += 1;
        }
    }
    return countCharObj;

    //return Array.from(str); includes the space
    //return [...str]; another method but includes the space
}

console.log(countCharsInStr("abcd ABC cdccdd abefgh efgh"))
