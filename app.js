// Global Scope

var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";

console.log(globalVar);  
console.log(globalLet);  
console.log(globalConst); 

// Function Scope

function testFunctionScope() {
    var funcVar = "I am var";
    let funcLet = "I am let";
    const funcConst = "I am const";
}
console.log(typeof funcVar);  
console.log(typeof funcLet);  
console.log(typeof funcConst); 

// Block Scope

if (true) {
    var blockVar = "I am var";
    let blockLet = "I am let";
    const blockConst = "I am const";
}

console.log(blockVar);   
console.log(typeof blockLet);  
console.log(typeof blockConst);

// Hoisting with var

var hoistedVar = "Hoisted";
console.log(hoistedVar); 

// Hoisting with let and const

let hoistedLet = "Not Hoisted";
console.log(hoistedLet);  

const hoistedConst = "Not Hoisted";
console.log(hoistedConst); 

// Re-declaration

var redeclareVar = "Var1";
var redeclareVar = "Var2"; 

let redeclareLet = "Let1";
// let redeclareLet = "Let2"; 

const redeclareConst = "Const1";
// const redeclareConst = "Const2"; // SyntaxError

// Re-assign

var reassignVar = "Var1";
reassignVar = "Var2"; 

let reassignLet = "Let1";
reassignLet = "Let2"; 

const reassignConst = "Const1";
// reassignConst = "Const2"; // TypeError



// Temporal Dead Zone

{    let tdzLet = "TDZ Let";
    console.log(tdzLet); 
    const tdzConst = "TDZ Const";
    console.log(tdzConst); 
    
};

// When to Use var, let, and const

var x = "Global variable"; // Rarely recommended now
let y = "Block-scoped variable"; // For mutable variables
const z = "Constant variable"; // For immutable values

// String Interpolation

let firstName = "sara";
let lastName = "khan";
console.log(`Hello, ${firstName} ${lastName}!`);

// Multi-line Strings

let address = `
123 Street,
City,
Country
`;
console.log(address);

// Function Calls

function multiply(a, b) {
    return a * b;
}
console.log(`The product is: ${multiply(2, 3)}`);

// Creating a Tagged Template

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
tag`Hello ${"World"}!`;

// Conditional Logic

let currentHour = 10;
let message = `Good ${currentHour < 12 ? "Morning" : "Afternoon"}!`;
console.log(message);

// Loops within Template Literals

let shoppingList = ["Milk", "Eggs", "Bread"];
let htmlList = 
`<ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
console.log(htmlList);

// Even or Odd

let number = 4;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// Grade Evaluation

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade);

// Mapping Values

let numbers = [1, 2, 3, 4, 5];
let mapped = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
console.log(mapped);

// Copying an Object

let original = { name: "sara", age: 20 };
let copied = { ...original };
console.log(copied);

// Merging Objects

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged);

// Rest Parameter

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4));

// Skipping Elements //

let Colors = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = Colors;
console.log(primaryColor, tertiaryColor);

// Rest Operator //

let  numberVal = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numberVal;
console.log(firstNumber);
console.log(remainingNumbers);

// Basic Object Destructuring //

let prsn = { name: "Namrah", ge: 20, city: "Islamabad" };
let { pname, page, city } = prsn;
console.log(pname, page, city);

// Renaming Variables //

let vehicle = { make: "Toyota", model: "corolla", year: 2021 };
let { make: carMake, model: carModel, year: carYear } = vehicle;
console.log(carMake, carModel, carYear);

// Default Values //

let mobSettings = { theme: "dark" };
let { theme, language = "English" } = mobSettings;
console.log(theme, language);

//  Array of Arrays //

let NestedArray = [[1, 2], [3, 4], [5, 6]];
let [[a], [, b], [, c]] = NestedArray;
console.log(a, b, c);

// Object within an Object //

let profile = { username: "user123", details: { Email: "user@example.com", address: "123 Street" } };
let { username, details: { Email, Address } } = profile;
console.log(username, Email, address);

// Mix of Arrays and Objects //

let data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
let { id, info: [{ name }, { age }] } = data;
console.log(id, name, age);

// Array Parameters //

function printCoordinates([x, y]) {
    console.log(`x: ${x}, y: ${y}`);
}
printCoordinates([5, 10]);

// Object Parameters //

function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Bob", age: 30 });

// List Property Names //

let book = { title: "1984", author: "George Orwell", year: 1949 };
console.log(Object.keys(book));

// Count Properties //

let student = { name: "John", age: 20, grade: "A", school: "XYZ High" };
console.log(Object.keys(student).length);

// Iterate Over Keys //

let product = { name: "Laptop", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(`${key}: ${product[key]}`));

// List Property Values //

let movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
console.log(Object.values(movie));

// Sum Values //

let scores = { math: 90, science: 85, english: 88 };
let totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore);

// Iterate Over Values //

let user = { username: "Dora", email: "dora@gmail.com", location: "Lahore" };
Object.values(user).forEach(value => console.log(value));

//  List Entries //

let car = { make: "Tesla", model: "Model S", year: 2020 };
console.log(Object.entries(car));

// Convert Object to Array //

let person = { firstName: "John", lastName: "Doe", age: 30 };
console.log(Object.entries(person));

// Iterate Over Entries //

let settings = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings).forEach(([key, value]) => console.log(`${key}: ${value}`));

//  Filter Keys //

let inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(filteredKeys); 

// Transform Values //

let temperatures = { morning: 20, afternoon: 25, evening: 18 };
let fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([key, temp]) => [key, temp * 1.8 + 32])
);
console.log(fahrenheitTemps);

//  Key-Value Swap //

let roles = { admin: "Admin", editor: "Editor", viewer: "Viewer" };
let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log(swappedRoles);

// Filter and Map //

let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log(filterAndMap(val, n => n % 2 !== 0, n => n ** 2));


// Nested Destructuring

let std = { 
    id: 1, 
    name: "Sara", 
    grades: [90, 85], 
    info: { age: 20, major: "CS" } 
};
let { stdId, stdName, info: { major }, ...rest } = std;
console.log(id, name, major, rest);

// Simple Promise

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Hello, World!"));

async function getUserData() {
    try {
        let data = await fetchUserData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getUserData();

// Error Handling in async/await //

function fetchUser() {
    return new Promise((resolve, reject) => {
        let user = null;
        if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    });
};

async function getUserInfo() {
    try {
        let user = await fetchUser();
        console.log(user);
    } catch (err) {
        console.log(err); 
    }
};

getUserInfo();

// 104: Simulate API Calls //

function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data received");
            } else {
                reject("Error occurred");
            }
        }, Math.random() * 2000);
    });
}

async function getData() {
    try {
        let data1 = await apiCall();
        console.log(data1);
        let data2 = await apiCall();
        console.log(data2);
        let data3 = await apiCall();
        console.log(data3);
    } catch (err) {
        console.log(err); 
    }
}

getData();