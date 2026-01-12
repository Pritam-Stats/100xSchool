function findMax3(numArray){
    numArray.sort((a,b)=> b-a);    //arrow fn, use to compare. //descending
    return numArray.slice(0,3);

};


console.log(findMax3([45, 23, 78, 12, 90, 67, 34]));
console.log(findMax3([2, 100, 90, 5, 7]));  //[90, 7, 5] from the below logic

//numArray.sort().reverse();  //sort method DOESN'T create a new arr toSorted does.
// wrong way to do this, js sort function works lexicographically. converts everything to string



///// 2nd logic using Loop
function max3(numArray){
    let a = -Infinity, b = -Infinity, c = -Infinity;
    for (let x of numArray){
        if (x>a){
            [a, b, c] = [x, a, b];
        } 
        else if (x > b) {
            [b, c] = [x, c];
        }
        else if (x > c){
            c = x;
        }
    }
    return [a, b, c]
}

console.log(max3([45, 23, 78, 12, 90, 67, 34]));
console.log(max3([2, 100, 90, 5, 7]));

