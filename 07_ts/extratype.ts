interface detailstype{
    info: string;
    username: string;
}

let details: string | detailstype = "this is extra type files";

console.log(details);

details = {
    info: "user information",
    username: "user123",
};

console.log(details);


//details = 10;
//console.log(details)

enum Gender {
    male,
    female,
    other,
}

