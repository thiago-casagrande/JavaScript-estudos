const ReadLine = require('readline');

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somar(a, b) {
    console.log(a + b);
}
somar(5, 10);
somar(15, 25);