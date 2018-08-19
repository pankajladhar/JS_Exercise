const path = require('path');
const fs = require('fs');
const root = path.join(__dirname, '..')
const dataFile = path.resolve(__dirname, 'data.js');
const mdFile = path.resolve(__dirname, 'data.md');
const data = require('./data')

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

    const content = `
        const data = ${JSON.stringify(results, null, 2)}
        module.exports = data

    `
    fs.writeFileSync(dataFile, content, 'utf8');

}

const createMD = () => {
    let content = `
# JS Exercise

Collection of JavaScript problems.

| Method        | Description           | Code |
| ------------- |-----------------------|------|
`
    data.forEach(element => {
        content = `${content} | **${element.problem}** | ${element.statement} | [link](${element.url}) \n`
    });
    fs.writeFileSync(mdFile, content, 'utf8');
}


// build()
createMD()