/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.

  Input::    const transactions = [
            {
                id: 1,
                timestamp: 1656076800000,
                price: 10,
                category: 'Food',
                itemName: 'Pizza',
            },
        ];
  
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    let output = [];
    let categoricalSpent = {};
    for (let obj of transactions) {
        categoricalSpent[obj["category"]] = (categoricalSpent[obj.category] || 0 ) + obj.price;
    }

    for (let [category, total] of Object.entries(categoricalSpent)) {
        output.push(
            {
                category : category,
                totalSpent : total
            }
        );
    };

    return output
}


// const transactions = [
//     {
//         id: 1,
//         timestamp: 1656076800000,
//         price: 10,
//         category: 'Food',
//         itemName: 'Pizza',
//     },
//     {
//         id: 1,
//         timestamp: 1656076800000,
//         price: 20,
//         category: 'Food',
//         itemName: 'Pizza',
//     },
//     {
//         id: 1,
//         timestamp: 1656076800000,
//         price: 20,
//         category: 'Travel',
//         itemName: 'Pizza',
//     },
// ];


// console.log(calculateTotalSpentByCategory(transactions))
module.exports = calculateTotalSpentByCategory;