const users = [
    {name: "jay" ,verified: false},
    {name: "mehul " ,verified: true},
    {name: "riya" ,verified: false},
];


const verifieduser = users.filter(function(user){
    return user.verified === true;
});
console.log(verifieduser);

