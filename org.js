let fs = require("fs");
let path = require("path");

let types = {
	media : ["mp3", "mp4", "mkv"],
	archives : ["rar", "zip"],
	document : ["docx", "pdf", "json"],
	images : ["jpg", "png", "bmp"],
	app : ["exe", "msi", "jar"]
}


function organizeFn(dirPath){
    let destPath = process.cwd();
    if(dirPath == undefined){
        dirPath = process.cwd();
        console.log("Please enter path");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist == true){
            destPath = path.join(dirPath, "organized_files");
            let isFile = fs.existsSync(destPath);
            if(isFile == false){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}
function organizeHelper(dirPath, destPath){
    let childName = fs.readdirSync(dirPath);
    console.log(childName);
    for(let i=0; i<childName.length; i++){
        let childAddress = path.join(dirPath, childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile == true){
            
            let category = getCategory(childName[i]);
            console.log(childName[i], "  --> belongs to -->  ", category);
            sendFiles(childAddress, destPath, category);

        }
        

    }
}
function getCategory(childName){
    let ext = path.extname(childName);
    ext = ext.slice(1);
    for(let type in types){
        let ctTypeArr = types[type];
        for(let i=0; i<ctTypeArr.length; i++){
            if(ext == ctTypeArr[i]){
                return type;
            }
        }
    }
    return "others";
}
function sendFiles(childAddress, destPath, category){
    let categoryPath = path.join(destPath, category);
    let isFile = fs.existsSync(categoryPath);
    if(isFile == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(childAddress);
    let finalDest = path.join(categoryPath, fileName);
    fs.copyFileSync(childAddress, finalDest);
}

module.exports = {
    organizekey : organizeFn
}