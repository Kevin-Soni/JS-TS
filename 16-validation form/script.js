// function validateForm(e) {
//     e.preventDefault();

//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-={}[\]|:;"'<>,./~`]).{8,}$/;

//     if (!username || !email || !password) {
//         alert("Please fill all fields");
//         return false;
//     }

//     if (!emailpattern.test(email)) {
//         alert("Please enter a valid email address");
//         return false;
//     }

//     if (password.length < 8) {
//         alert("Password must be at least 8 characters");
//         return false;
//     }

//     if (!passwordpattern.test(password)) {
//         alert("Password must contain at least one letter, one number and one special character");
//         return false;
//     }

//     alert("Form submitted successfully!");
//     return true;
// }

let num = 90;
let factor = 5




;

while (num > 1) {
    if (num % factor === 0) {
        console.log(factor);
        num = num / factor;
    } else {
        factor++;
    }
}
    
    


