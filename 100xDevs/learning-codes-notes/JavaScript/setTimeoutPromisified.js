function setTimeoutPromisified(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve()
        } ,delay)
        //since there is no error state we never really call the reject
    })
}


// how do we call any promisified function
function greet() {
    console.log("Hello Hello")
}

setTimeoutPromisified(2000)
    .then(greet)



