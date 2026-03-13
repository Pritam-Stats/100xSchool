// fetch

async function mod() {
    const res = await fetch("http://localhost:3000/")
    const json = await res.json(); //have to call this promise

    console.log(json);
}

// axios
axios = require("axios");

async function main() {
    const res = axios({
        method: "get",
        url: "https://httpdump.app/dumps/bda70cd1-4685-4d75-8cb3-a103abe70d41?a=1&b=2",
        headers: {"Authorized" : "Pritam"},
        

    })
    // console.log(res.data); //this automatically returns a json
}

// main()
// post method
async function post(){
    const res = await fetch("https://httpdump.app/dumps/bda70cd1-4685-4d75-8cb3-a103abe70d41?a=1&b=2", {
        method: "POST",
        body : JSON.stringify({
            "a" : 1,
            "b" : 2,
            "name" : "pritam",
        }),
        headers : {
            "Auth" : "iPritam",
            "Pass" : 123,
        }

    })
    const text = await res.text();      // we have to know what type of we are getting from backend
    console.log(res.status);
}
post()

//axios post
async function mainpost() {
    const res = axios.post("https://httpdump.app/dumps/bda70cd1-4685-4d75-8cb3-a103abe70d41" ,
        {//req body
            'names' : ['a', 'b', 'd'],
            'age' : [12, 13, 14]
        },
        {
            headers : {
                "user" : "Admin",
                'pass' : 1234, 
            }
        }
    )
    console.log(res.data);
}
// mainpost()


// better syntax - give complete as an object inside axios
const now = new Date();
async function axiospost() {
    const res = await axios({
        url: "https://httpdump.app/dumps/bda70cd1-4685-4d75-8cb3-a103abe70d41",
        method : "post",
        data : {
            "username" : "iPritam9",
            "name" : "Pritam",
            "Logged in" : now.toLocaleString(),
        },
        headers: {
            'pass' : 1244545,
            'email' : "abc@gmail.com",
        }
    });
    console.log(res.status)
}

// axiospost()
