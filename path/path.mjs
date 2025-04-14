import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Re-create __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(path.basename(__filename)); // Current file name
console.log(path.dirname(__filename)); // Directory path
console.log(path.join(__dirname, "files", "test.txt")); // Safe joining
console.log(path.resolve("files", "test.txt")); // Absolute path
console.log(path.extname(__filename)); // File extension
console.log(path.parse(__filename)); // Parse path
console.log(path.isAbsolute("/foo/bar")); // true
console.log(path.isAbsolute("foo/bar")); // false
console.log(path.normalize("/foo/bar//baz/asdf/quux/..")); // Normalize path
console.log(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb")); // Relative path
console.log(path.sep); // Path separator
console.log(path.delimiter); // Path delimiter
console.log(path.format({ dir: "/home/user", base: "file.txt" })); // Format path
console.log(path.win32.basename("C:\\path\\file.txt")); // Windows path
console.log(path.posix.basename("/path/file.txt")); // POSIX path
console.log(path.join("foo", "bar", "baz/asdf", "quux", "..")); // Join paths
console.log(path.resolve("foo", "bar")); // Resolve paths
console.log(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb")); // Relative path
console.log(path.isAbsolute("/foo/bar")); // true
console.log(path.isAbsolute("foo/bar")); // false
console.log(path.normalize("/foo/bar//baz/asdf/quux/..")); // Normalize path
console.log(path.parse("/home/user/file.txt")); // Parse path
console.log(path.format({ dir: "/home/user", base: "file.txt" })); // Format path
console.log(path.sep); // Path separator
console.log(path.delimiter); // Path delimiter
console.log(path.win32.basename("C:\\path\\file.txt")); // Windows path
console.log(path.posix.basename("/path/file.txt")); // POSIX path
console.log(path.join("foo", "bar", "baz/asdf", "quux", "..")); // Join paths
console.log(path.resolve("foo", "bar")); // Resolve paths
