const products = [
    {name: "Laptop"},
    {name: "Phone"},
    {name: "Shoes"}   
];

const query = "ph";

const result = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
);
console.log(result);


