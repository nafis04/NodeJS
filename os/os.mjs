import os from "os";

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Free memory:", os.freemem());
console.log("CPUs:", os.cpus().length);
