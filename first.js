#!/usr/bin/env node
let treeObj = require("./trees");
let helpObj = require("./help.js");
let organizeObj = require("./org.js");

let types = {
	media : ["mp3", "mp4", "mkv"],
	archives : ["rar", "zip"],
	document : ["docx", "pdf", "json"],
	images : ["jpg", "png", "bmp"],
	app : ["exe", "msi", "jar"]
}

let fs = require("fs");
const { dirname } = require("path");
let path = require("path");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch(command){
    case "tree" :
        treeObj.treesKey(inputArr[1]);
        break;
 
    case "organize" :
        organizeObj.organizekey(inputArr[1]);
        break;

    case "help" :
        helpObj.helpkey();
        break;

    default :
        console.log("Kindly 🙏 enter statement");
        break;
}
