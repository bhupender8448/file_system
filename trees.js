let fs = require("fs");
let path = require("path");


function treeFn(dirPath){
    if(dirPath == undefined){
        dirPath = process.cwd();
        console.log("Please enter path");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist == true){
            treeHelper(dirPath, "");
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
}
function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "└───" + fileName);
    }
    else{
        let dirName = path.basename(dirPath);
        console.log(indent + "├───" + dirName);
        let childName = fs.readdirSync(dirPath);
        for(let i=0; i<childName.length; i++){
            let childAddress = path.join(dirPath, childName[i]);
            treeHelper(childAddress, indent + "\t");
        }
    }
}
module.exports = {
    treesKey : treeFn
}