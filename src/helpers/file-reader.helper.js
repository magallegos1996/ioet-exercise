const fs = require('fs');
const path = require('path');
const inputProcessor = require('./input-processor.helper')

const fileReader = {}

fileReader.readFile = () => {
    const dataPath = path.join(process.cwd(), '/src/data/data.txt');
    fs.readFile(dataPath, 'utf8', (err, contents) => {
        inputProcessor.processInput(contents);
    });
}



module.exports = fileReader;



