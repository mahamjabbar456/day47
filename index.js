// Question 139
// Reserved word : let
let count = 5;
// Reserved word : if
if (count > 0) {
    console.log("Count is greater than 0.");
}
// Reserved word : return
function add(a, b) {
    return a + b;
}
// Question 140
// let if = 5; // This line would cause a syntax error
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
// Question 141
function fetchSomething() { }
;
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
export {};
