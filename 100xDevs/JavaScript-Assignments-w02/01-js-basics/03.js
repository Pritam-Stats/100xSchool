print = console.log;
const obj = { a: "x", b: "y", c: "z" };

let newObj = Object.create(null);
for (let [key, val] of Object.entries(obj)) {
    newObj[val] = key;
}
print(newObj)

/// ===========================================

// version 2
newObj = Object.fromEntries(Object.entries(obj).map(
    ([key, val]) => [val, key]
))

print(newObj)