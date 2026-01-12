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