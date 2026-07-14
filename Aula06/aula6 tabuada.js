const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tabuada = 1;

while (tabuada <= 10) {
    console.log(" 5 x " + tabuada + " = " + (5 * tabuada));
    tabuada++;
}