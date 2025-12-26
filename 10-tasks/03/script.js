const sales = [
    {product : "laptop",sold: 120},
    {product : "mouse",sold: 340},
    {product : "keyboard",sold: 260},
];

const highestsolditem = sales.reduce((max , item) => 
    item.sold > max.sold ? item : max
);
console.log(highestsolditem);