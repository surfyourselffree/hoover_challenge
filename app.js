const fs = require("fs");

//read input, text file

const input = fs.readFileSync("./input.txt");

const inputString = input.toString();

const inputArr = inputString.split('\n');

//parse the input

const sizeInput = inputArr[0]; // 5 5
const sizeInputArr = sizeInput.split(" ");
const xLimit = Number(sizeInputArr[0]) - 1; // x axis dimension
const yLimit = Number(sizeInputArr[1]) - 1; // y axis dimension

const locInput = inputArr[1]; // 1 2
const locInputArr = locInput.split(" ");
let xHoo = Number(locInputArr[0]); // x axis Hoover
let yHoo = Number(locInputArr[1]); // y axis Hoover

const indDir = inputArr.length - 1;

const directions = inputArr[indDir]; //cardinal dirs

const dirtPatchInputArr = inputArr.slice(2, indDir);
const dirtPatchesObj = {};

for (let i = 0; i < dirtPatchInputArr.length; i++) {
    const key = dirtPatchInputArr[i];

    dirtPatchesObj[key] = true;
}

//main logic

let count = 0;

for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];
    // Position of Hoover is xHoo, yHoo
    // to move Hoover, update xHoo and yHoo
    // Updates in real time, labeled
    if (dir === 'N' && yHoo < yLimit) {
        yHoo++;
    }
    if (dir === 'S' && yHoo > 0) {
        yHoo--;
    }
    if (dir === 'W' && xHoo > 0) {
        xHoo--;
    }
    if (dir === 'E' && xHoo < xLimit) {
        xHoo++;
    }
    //equating cardinal dir to x and y axis locale

    const currentPosStr = xHoo + ' ' + yHoo; // Checking current position to see if it is dirt

    if (dirtPatchesObj[currentPosStr]) {
        count++;
        delete dirtPatchesObj[currentPosStr]; // Dirt is cleaned and to keep from iterating over previous patches, you delete them after cleaning
    }

}

const finalPos = xHoo + ' ' + yHoo;
const dirtPatchesCleaned = count;
//convert to desired output format

console.log(finalPos);
console.log(dirtPatchesCleaned);
//give output with goals in mind; 
// 1. final position of Roomba/Hoover
// 2. number of dirt patches cleaned
