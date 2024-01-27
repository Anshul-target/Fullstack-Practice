// Given an array, find the second smallest and second largest element in the array.Print ‘-1’ in the event that either of them doesn’t exist


// Example 1:
// Input: [1, 2, 4, 7, 7, 5]
// Output: Second Smallest: 2
// 	Second Largest: 5
// Explanation: The elements are as follows 1, 2, 3, 5, 7, 7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest: -1
// 	Second Largest: -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array.There is no second largest or second smallest element present.




const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// const num1 = 10;
// const num2 = 10;
// const answer = (num1 + num2) / 2


// rl.question(`What is  ${num1}+${num2}/2 ? \n `, (userInput) => {
//     if (userInput == answer) {
//         // closing it
//         rl.close();
//     }
//     else {
//         // setpromt will give advise to the user
//         rl.setPrompt(`Incorrect response please try again \n What is  ${num1}+${num2}/2 ? \n `);

//         rl.prompt();
//         // we have to call it
//         // rl.on() method takes the first argument as line event. This event is invoked whenever the user press Enter key
//         rl.on("line", (userInput) => {
//             if (userInput == answer) {
//                 rl.close()
//             }
//             else {
//                 rl.setPrompt(`Your answer is incorrect please  try again \n What is  ${num1}+${num2}/2 ? \n `);
//                 rl.prompt()

//             }
//         })
//     }

// })
let arr = []
rl.question("Enter the  size of an array \n", (n) => {


    let i = 0;

    rl.setPrompt("Enter the element in integer format \n")
    rl.prompt();
    rl.on("line", (userInput) => {
        if (!isNaN(parseInt(userInput))) {
            if (i < n) {
                arr.push(parseInt(userInput));
                i = i + 1;
                if (i < n) {

                    rl.setPrompt("Enter the element in integer format \n")
                    rl.prompt();
                }
                else
                    rl.close();
            }
            else {

                rl.close();
            }
        }
        else {
            rl.setPrompt("Enter the correct data type \n");
            rl.prompt();
        }
    })


})
rl.on("close", () => {

    console.log("The elements of array are", arr);

    setTimeout(() => {
        console.log("Now we have to find the second largest and second smallest ");
    }, 2000)

    setTimeout(() => {
        console.log("1.Brute Force Approach....");
    }, 2200)

    setTimeout(() => {
        if (arr.length < 0 || arr.length == 1) {
            console.log("No second smallest and second largest element exist");
        }
        else {
            let smallest = arr[0];
            let largest = arr[0];
            arr.forEach((element, idx) => {
                if (element > largest) {
                    largest = element;

                }
                else if (element < smallest) {
                    smallest = element
                }

            })
            console.log("The smallest element is", smallest);
            console.log("The largest element is", largest);
            arr = arr.filter(element => element !== smallest && element !== largest)

            if (arr.length <= 0)
                console.log("No secondSmallest and secondLargest no exists");
            else if (arr.length == 1) {
                console.log(arr[0], "is the secondSmallest and secondLargest No");
            }
            else {
                let secondLargest = arr[0];
                let secondSmallest = arr[0];
                arr.forEach((element, idx) => {
                    if (element > secondLargest) {
                        secondLargest = element;

                    }
                    else if (element < secondSmallest) {
                        secondSmallest = element
                    }

                })
                console.log("Second Largest no is", secondLargest);
                console.log("Second Smallest no is", secondSmallest);
            }
        }
    }, 3000)

    setTimeout(() => {
        console.log("The time complexity is BigO of 2N")
    })
})

// IT ALSO CAN BE THE SOLUTION FOR BETTER APPROACH


// function getElements(arr) {
//     if (arr.length === 0 || arr.length === 1) {
//         console.log(-1 + " " + -1); // Edge case when only one element is present in the array
//         return;
//     }

//     let small = Infinity;
//     let second_small = Infinity;
//     let large = -Infinity;
//     let second_large = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         small = Math.min(small, arr[i]);
//         large = Math.max(large, arr[i]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < second_small && arr[i] !== small)
//             second_small = arr[i];
//         if (arr[i] > second_large && arr[i] !== large)
//             second_large = arr[i];
//     }

//     console.log("Second smallest is " + second_small);
//     console.log("Second largest is " + second_large);
// }

// const arr = [1, 2, 4, 6, 7, 5];
// getElements(arr);

