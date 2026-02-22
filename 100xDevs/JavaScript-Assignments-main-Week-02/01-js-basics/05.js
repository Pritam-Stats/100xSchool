function flattenObject(obj) {
    return Object.values(obj).reduce(
        (acc, curr) => acc.concat(curr)
    ) 
}

console.log(flattenObject({ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }))

const obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
console.log(Object.values(obj).flat())