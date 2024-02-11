// Move all Zeros to the end of the array
// In this article we will learn how to solve the most asked coding interview problem: “Move all Zeros to the end of the array”

// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non - negative integers to the front by maintaining their order.


// Example 1:
// Input: 1, 0, 2, 3, 0, 4, 0, 1
// Output: 1, 2, 3, 4, 1, 0, 0, 0
// Explanation: All the zeros are moved to the end and non - negative integers are moved to front by maintaining order

// Example 2:
// Input: 1, 2, 0, 1, 0, 4, 0
// Output: 1, 2, 1, 4, 0, 0, 0
// Explanation: All the zeros are moved to the end and non - negative integers are moved to front by maintaining order




const readLine = require("node:readline")
const { stdin: input, stdout: output } = require("node:process")
const { resolve } = require("node:path")

const rl = readLine.createInterface({ input, output })
// Your imports and setup...

let i = 0;
let arr = [];

// Function to add elements to the array
function addElementInArray(element, n) {
    if (i < n) {
        arr.push(parseInt(element));
        i++;
        return true;
    } else {
        return false;
    }
}

// Collecting array size and elements
rl.question("Enter the size of an array: \n", (n) => {
    if (n <= 0) {
        console.log("Enter a positive non-zero number");
        rl.close();
    } else {
        console.log(`Enter ${n} elements of the array:`);
        rl.on("line", (userInput) => {
            if (!isNaN(parseInt(userInput))) {
                const result = addElementInArray(userInput, n);
                if (result) {
                    if (i < n) {
                        console.log(`Enter element ${i + 1} of the array: `);
                    } else {
                        rl.close();
                    }
                } else {
                    rl.close();
                }
            }
        });
    }
});


function movingZeroToEnd(array) {
    let zeroArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {

            zeroArr.push(...array.slice(i, i + 1));

            array.splice(i, 1);
            i--
        }
    }
    console.log(zeroArr);
    console.log(array);
    zeroArr.forEach(item => {
        array.push(item)
    })
    return array
}

// Handling close event
rl.on("close", () => {
    const trailZeroArray = movingZeroToEnd(arr);
    console.log("The modified array is", trailZeroArray);



});



// Optimal Approach is solved by two pointers approach










