function goldenString(str){
    str = str.trim();
    if (str[0] === 'a' || str[0] === 'A'){
        if (str.length >= 5){
            return "Golden String"
        }
    }
    else{
        return "not a golden string."
    }
}

console.log(goldenString("pple is a fruit."))