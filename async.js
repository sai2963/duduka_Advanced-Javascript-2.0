const fs = require("fs/promises");
function readFile() {
  let filedata;

  filedata = fs.readFile("data.txt").then(function (filedata) {
    console.log("fileparsing done");
    console.log(filedata.toString());
  });
  
 
  console.log("hi all");
}
readFile();
