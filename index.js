const fs = require('fs');
const core = require('@actions/core');

async function run() {
    const file1Path = process.env.INPUT_FILE1;
    const file2Path = process.env.INPUT_FILE2;

    const file1Content = JSON.parse(fs.readFileSync(file1Path, 'utf8'));
    const file2Content = JSON.parse(fs.readFileSync(file2Path, 'utf8'));

    const mergedContent = {};
    Object.keys(file2Content).forEach(key => {
        mergedContent[key] = file1Content[key];
    });

    core.setOutput("result", JSON.stringify(mergedContent, null, 2));
}

run();
