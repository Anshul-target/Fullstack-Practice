// Remove Duplicates in -place from Sorted Array

// Problem Statement: Given an integer array sorted in non - decreasing order, remove the duplicates in place such that each unique element appears only once.The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result.It does not matter what you leave beyond the first k elements.

//     Note: Return k after placing the final result in the first k slots of the array.

// Example
// Example 1:

// Input: arr[1, 1, 2, 2, 2, 3, 3]

// Output: arr[1, 2, 3, _, _, _, _]

// Explanation: Total number of unique elements are 3, i.e[1, 2, 3] and Therefore return 3 after assigning[1, 2, 3] in the beginning of the array.

//     Example 2:

// Input: arr[1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]

// Output: arr[1, 2, 3, 4, _, _, _, _, _, _, _]

// Explanation: Total number of unique elements are 4, i.e[1, 2, 3, 4] and Therefore return 4 after assigning[1, 2, 3, 4] in the beginning of the array.


const readLine = require("node:readline")
const { stdin: input, stdout: output } = require("node:process")


const rl = readLine.createInterface({ input, output })


let i = 0
let arr = []
function addElementInArray(element, n) {
    if (i < n) {
        arr.push(parseInt(element))
        i = i + 1;
        return 1;
    }
    else
        return 0;
}


rl.question("Enter the size of an array \n", (n) => {
    if (n <= 0) {
        rl.setPrompt("Enter a positive non zero number \n")
        rl.prompt()
        rl.close();

    }

    rl.setPrompt(`Enter the ${i} index element of array \n`);
    rl.prompt();
    rl.on("line", (userInput) => {



        if (!isNaN(parseInt(userInput))) {
            const result = addElementInArray(userInput, n)
            if (result) {
                if (i < n) {

                    rl.setPrompt(`Enter the ${i} index element of array \n`)
                    rl.prompt();
                }
                else {
                    rl.close()
                }
            }
            else {
                rl.close();
            }
        }



    })
})

bruteForce = (array) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Solving by bruteForce method...");





            let noi = 0
            for (let i = 0; i < array.length; i++) {

                let element = array[i];
                for (let j = 0; j < array.length; j++) {
                    if (array[j] == element && j !== i) {
                        array.splice(j, 1);
                    }
                    else
                        continue;
                }

            }
            console.log("The updated array is", array);
            resolve(array.length)


        }, 1000)
    })

}



rl.on("close", () => {
    console.log(arr);
    bruteForce(arr).then(result => {
        setTimeout(() => {
            console.log(result);

        }, 2000)

        setTimeout(() => {
            console.log("Time complexity is O of N2");

        }, 3000)

    })

})





// Optimal Approach
// Two pointers =>Algorithms
// function removeDuplicates(arr) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }

// const arr = [1, 1, 2, 2, 2, 3, 3];
// const k = removeDuplicates(arr);

// console.log("The array after removing duplicate elements is:");
// for (let i = 0; i < k; i++) {
//     console.log(arr[i]);
// }







