const fs = require('fs')
const dirNames = fs.readdirSync('./dist/src')
for(let i = 0;i < dirNames.length;i++){
    fs.copyFileSync(`./dist/src/${dirNames[i]}/index.html`, `./dist/${dirNames[i]}.html`)
    console.log(dirNames[i]);
}
fs.rmdirSync('./dist/src',{recursive:true})
