import fs, { promises as fsPromises } from "fs";
// Read the file (synchronously)
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
// Read the file (asynchronously)
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Read a file with a promise
fsPromises
  .readFile("hello.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
// Read a file with async/await
async function readFile() {
  try {
    const data = await fsPromises.readFile("hello.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();

// Read a file with a stream
import { createReadStream } from "fs";
import { createInterface } from "readline";
const fileStream = createReadStream("hello.txt");
const rl = createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
rl.on("line", (line) => {
  console.log(`Line from file: ${line}`);
});
