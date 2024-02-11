// Rotate array by K elements
// Rotate array by K elements

// Example 1:
// Input: N = 7, array[] = { 1, 2, 3, 4, 5, 6, 7}, k = 2, right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position.

//     Example 2:
// Input: N = 6, array[] = { 3, 7, 8, 9, 10, 11}, k = 3, left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

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

// RotateArrayByKelement function
function RotateArrayByKelement(array, k) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Solving by the better approach");
            const duplicateArray = array.slice(0);
            for (let i = 0; i < array.length; i++) {
                let newIndex = (i + k) % array.length;
                array[newIndex] = duplicateArray[i];
            }
            console.log(array);
            resolve(array);
        }, 1000);
    });
}

// Handling close event
rl.on("close", () => {
    RotateArrayByKelement(arr, 2).then((result) => {
        console.log(result);
    });
});









