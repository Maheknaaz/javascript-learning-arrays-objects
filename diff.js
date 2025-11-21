//Array: for storing a list
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

//Objects: for details of one item
let fruit = {
    name: "apple",
    color: "red",
    price: 50
};
console.log(fruit);

// Array: Many products
let products = ["Shoes", "Bag", "Watch"];
console.log(products);

//Objects: Details of one product
let product = {
    name: "Shoes",
    price: 1499,
    inStock: true
};
console.log(product);

// Array of Objects

let products2 = [
    {
        name: "Shoes",
        price: 1599,
        inStock: true
    },
    {
        name: "Lipstick",
        price: 599,
        inStock: false
    },
    {
        name: "Perfume",
        price: 899,
        inStock: true
    }
];
console.log(products2);
console.log(products2[1].name);