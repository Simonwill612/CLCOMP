const fs = require("fs");

const file1Path = "file1.txt"; 
const file2Path = "file2.txt";

const filelData = fs.readFileSync(file1Path, "utf-8");
const file2Data = fs.readFileSync(file2Path, "utf-8");

const file3Data = filelData + file2Data;

fs.writeFileSync("file3.txt", file3Data);
const file3Content = fs.readFileSync("file3.txt","utf-8");
console.log(file3Content);