const user = {
    username: "jaimin",
    password: "12345",
    email: "testgmail.com",
};

let errors = "";

if (user.username.length < 4) {
    errors += "username must be at least 4 characters long. \n";
}

if (user.password.length < 6) {
    errors += "password must be at least 6 characters long. \n";
}

if (!user.email.includes("@")) {
    errors += "email must contain '@' .\n";
}

if (errors) {
    console.log("errors:+" + errors);
} else {
    console.log("all passed");
}
