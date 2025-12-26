const users = [
    {name: "jay", lastlogin: "2025-12-01"},
    {name: "mehul", lastlogin: "2025-12-02"},
    {name: "riya", lastlogin: "2025-12-02"}
];

const today = "2025-12-02";

const loggedintoday = users.filter(user => user.lastlogin == today);

console.log(loggedintoday);