const path = require("path");

// path.basename('C:\\temp\\myfile.html');

const filename = path.basename("/user/test/file.txt");

console.log(filename);

// path.dirname("/user/test/file.txt");

const dirname = path.dirname("/user/test/file.txt");

console.log(dirname);

// path.extname("/user/test/file.txt");

const extname = path.extname("/user/test/file.txt");

console.log(extname);

// path.join("/user", "test", "file.txt");

const join = path.join("/user", "test", "file.txt");

console.log(join);

// path.resolve("app.js");

const resolve = path.resolve("app.js");

console.log(resolve);

// path.isAbsolute("/user/test/file.txt");

const isAbsolute = path.isAbsolute("/user/test/file.txt");

console.log(isAbsolute);

// path.parse("/user/test/file.txt");

const parse = path.parse("/user/test/file.txt");

console.log(parse.dir);
