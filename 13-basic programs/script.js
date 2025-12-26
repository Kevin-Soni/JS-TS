// 01 find sum of two numbers//

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let sum = a + b;

document.write("The sum of " + a + " and " + b + " is " + sum);

// 02 find two numbers arithmetic operations //

let a1 = Number(prompt("Enter first number: "));
let b2 = Number(prompt("Enter second number: "));        

let sum1 = a1 + b2;
let difference = a1 - b2;
let product = a1 * b2;
let quotient = a1 / b2;
let remainder = a1 % b2;  

document.write("The sum of " + a1 + " and " + b2 + " is:  " + sum + "<br>");
document.write("The difference of " + a1 + " and " + b2 + " is:  " + difference + "<br>");
document.write("The product of " + a1 + " and " + b2 + " is:  " + product + "<br>");
document.write("The quotient of " + a1 + " and " + b2 + " is:  " + quotient + "<br>");
document.write("The remainder of " + a1 + " and " + b2 + " is:  " + remainder + "<br>");

// 03 find parameter and area of rectangle
//formula == 2 * (length + breadth);

let length = Number(prompt("Enter the length of the rectangle: "));
let breadth = Number(prompt("Enter the breadth of the rectangle: "));

let perimeter = 2 * (length + breadth);

document.write("The perimeter of the rectangle is: " + perimeter + "<br>");

// 04 find area of rectangle

let length1 = Number(prompt("Enter the length of the rectangle: "));
let breadth1 = Number(prompt("Enter the breadth of the rectangle: "));

let area = length1 * breadth1;

document.write("The area of the rectangle is: " + area + "<br>");

// 05-find circule of diameter, circumference and area
// 

let radius = Number(prompt("Enter the radius of the circle: "));

let diameter = 2 * radius;
let circumference = 2 * 3.14* radius;
let area1 = 3.14 * (radius * radius);

document.write("The diameter of the circle is: " + diameter + "<br>");
document.write("The circumference of the circle is: " + circumference + "<br>");
document.write("The area of the circle is: " + area1 + "<br>"); 

// 06 centimeter conveert in meter and kilometer

let centimeter = Number(prompt("Enter the value in centimeter: "));

let meter = centimeter / 100;
let kilometer = centimeter / 100000;        

document.write(centimeter + " centimeter is equal to " + meter + " meter.<br>");
document.write(centimeter + " centimeter is equal to " + kilometer + " kilometer.<br>");

// 07 celcius convert in fahrenhit

let celsius = Number(prompt("Enter the temperature in Celsius: "));

let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is equal to " + fahrenheit + "<br>");

// 08 fahrenhit convert in celcius

let fahrenheit1 = Number(prompt("Enter the temperature in Fahrenheit: "));

let celsius1 = (fahrenheit1 - 32) * 5/9;
document.write(fahrenheit1 + "°F is equal to " + celsius1 + "<br>");

// 09 convert days into years, weeks, days

let day = Number(prompt("Enter the total number of days: "));

let years = days / 365;
years = years - (years % 1);

day = days % 365;

let weeks = day / 7;
weeks = weeks - (weeks % 1);

day = day % 7;

document.write("Years: " + years + "<br>");
document.write("Weeks: " + weeks + "<br>");
document.write("Days: " + day + "<br>");


// 13 find one angle using two angles of triangle

let angle1 = Number(prompt("Enter the first angle of the triangle: "));
let angle2 = Number(prompt("Enter the second angle of the triangle: "));

let angle3 = 180 - (angle1 + angle2);

document.write("The third angle of the triangle is: " + angle3 + "<br>");

// 14 find simple interest

let principal = Number(prompt("Enter the principal amount: "));
let rate = Number(prompt("Enter the rate of interest: "));
let time = Number(prompt("Enter the time in years: "));

let simpleInterest = (principal * rate * time) / 100;

document.write("The simple interest is: " + simpleInterest + "<br>");



