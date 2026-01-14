function searchFn(arr, target){
    if (typeof target === "string"){
        //search in name
        for (let obj of arr){
            if (obj['name'] === target){
                return obj
            }
        }
    }
    else {
        //search in age
        for (let obj of arr){
            if (obj['age'] === target){
                return obj
            }
        }
    }
    return "Not Found"
}

arr = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
];

//suppose target is John
console.log(searchFn(arr, "Jane"))