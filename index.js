const fs = require('fs');
const deepDiff = require('deep-diff');

async function run() {
    const file1Path = process.env.INPUT_FILE1;
    const file2Path = process.env.INPUT_FILE2;

    const file1Content = JSON.parse(fs.readFileSync(file1Path, 'utf8'));
    const file2Content = JSON.parse(fs.readFileSync(file2Path, 'utf8'));

    const diff = deepDiff.diff(file1Content, file2Content);

    // Log the differences or set an output
    console.log(diff);
    core.setOutput("result", JSON.stringify(diff));
}

run();
