const fs=require('fs');
function readFile(){
    let filedata;

    filedata=fs.readFile('data.txt',function(error,filedata){
        console.log('fileparsing done');
        console.log(filedata.toString());
    });
    

    console.log('hi there');
}
readFile();