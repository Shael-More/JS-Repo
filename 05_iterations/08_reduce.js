const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 )

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "Python Course",
        price: 4599,
    },
    {
        itemName: "Data Scientist Course",
        price: 12999,
    },
    {
        itemName: "Web Development Course",
        price: 8999,
    },
    {
        itemName: "Mobile Development Course",
        price: 5999,
    },
]

const myCartTotal = shoppingCart.reduce( (acc, item) => item.price + acc  , 0 )

console.log(myCartTotal)