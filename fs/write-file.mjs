import fs from "fs";

// Write a file (synchronously)
fs.writeFileSync("hello.txt", "Hello from Node!");

//Write a file (asynchronously)
fs.writeFile("hello.txt", "Hello from Node!", (err) => {
  if (err) throw err;
  console.log("File written!");
});
// Append to a file (synchronously)
fs.appendFileSync("hello.txt", "\nHello again!");
// Append to a file (asynchronously)
fs.appendFile("hello.txt", "\nHello again!", (err) => {
  if (err) throw err;
  console.log("File updated!");
});
