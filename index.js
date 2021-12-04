console.log('hello people');

function outPutPyramid(numLines) {
    let output = '';
    for (let i = 1; i <= numLines; i++) {
        for (let j = 0; j < 1; j++) {
            output += '*';
        }
        console.log(output);
    }
}

outPutPyramid(5);
