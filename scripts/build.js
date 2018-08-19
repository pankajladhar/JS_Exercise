const path = require('path');
const util = require('util');
const fs = require('fs');
const root = path.join(__dirname, '..')

const build = function () {

    let filesArray = [];
    let results = [];
    fs.readdirSync(root).forEach((file) => {
        if (file.includes(".js")) {
            filesArray.push(file)
        }
    });

    filesArray.forEach(file => {
        let fileContent = fs.readFileSync(path.resolve(root, file), 'utf8').replace(/\n/g, "");
        fileContent =
            results.push({
                problem: file.split(".js")[0],
                statement: fileContent.match(/([a-zA-Z0-9].+)\*\//gi)[0].replace(/\*\//g, "").replace(/\s\s+/g, ' '),
                url: `https://github.com/pankajladhar/JS_Exercise/blob/master/${file}`
            })
    });
    console.log(results)



}

build()