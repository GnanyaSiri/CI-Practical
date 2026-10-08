const fs = require("fs");

console.log("Building project...");

if (
    fs.existsSync("index.html") &&
    fs.existsSync("style.css") &&
    fs.existsSync("script.js")
) {
    console.log("Build successful!");
} else {
    console.log("Build failed!");
    process.exit(1);
}