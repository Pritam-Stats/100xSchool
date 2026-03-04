function printFibonacciSeries(n){
    let f0 = 0;
    let f1 = 1;
    let series = []
    while (n){
        series.push(f0);
        [f0, f1] = [f1, f0+f1];  //learnt from gpt               
                                                // let temp = f0;
                                                // f0 = f1;
                                                // f1 = temp+f1;

        n -= 1;
    }
    return series;
}

console.log(printFibonacciSeries(5));

function nthFibo(n) {
    //to print the nth fibonacci number
    if (n === 0 || n === 1){
        return n;
    }
    else {
        return nthFibo(n-1)+nthFibo(n-2);
    }
};

// callback
function getNthFiboAns(n, fiboFn){
    console.log(`The ${n}-th fibonacci number: ${fiboFn(n)}`);
}
getNthFiboAns(0, nthFibo)
getNthFiboAns(1, nthFibo)
getNthFiboAns(2, nthFibo)
getNthFiboAns(3, nthFibo)
getNthFiboAns(4, nthFibo)

