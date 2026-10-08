const fs = require("fs");

console.log("Running tests...");

if (
    fs.existsSync("index.html") &&
    fs.existsSync("style.css") &&
    fs.existsSync("script.js")
) {
    console.log("Tests passed!");
} else {
    console.log("Tests failed!");
    process.exit(1);
}