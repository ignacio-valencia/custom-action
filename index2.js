const fs = require('fs');
const core = require('@actions/core');

function isFilePath(input) {
    return input.endsWith('.json');
}

function getJsonContent(input) {
    if (isFilePath(input)) {
        return JSON.parse(fs.readFileSync(input, 'utf8'));
    } else {
        return JSON.parse(input);
    }
}

async function run() {
    const file1Input = JSON.stringify(process.env); // Convierte las variables de entorno a JSON
    const file2Input = process.env.INPUT_FILE2;

    const file1Content = getJsonContent(file1Input);
    const file2Content = getJsonContent(file2Input);

    const mergedContent = {};
    Object.keys(file2Content).forEach(key => {
        mergedContent[key] = file1Content[key];
    });

    console.log(process.env);

    core.setOutput("result", JSON.stringify(mergedContent, null, 2));
}

run();
