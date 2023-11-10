const fs =require('fs');
function readFile(){
    try{
        const filedata=fs.readFileSync('data.json');
    }
    catch{
        console.log('An Error occured')
    }
    console.log('done')
}
readFile();