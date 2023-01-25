let fs = require("fs");
let path = require("path");

function helpFn(){
    console.log(`
    These are the statements :
            help 
            organize "DirectoryPath"
            tree     "DirectoryPath"
      `);
}
module.exports = {
    helpkey : helpFn
}