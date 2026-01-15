function genEmpIds(n){
    let ans = [];
    for (let i = 1; i<=n; i++){
        let j = i.toString();
        if (j.length <4){
            j = "0".repeat(4- (j.length))+i;
        }
        ans.push("E"+j);
    }
    // problem is with the format E0001
    //return ans.slice(9990,10000);
    return ans
}

console.log(genEmpIds(20))