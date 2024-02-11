// Left Rotate the Array by One
// Example 1:
// Input: N = 5, array[] = { 1, 2, 3, 4, 5}
// Output: 2, 3, 4, 5, 1
// Explanation: 
// Since all the elements in array will be shifted 
// toward left by one so ‘2’ will now become the 
// first index and and ‘1’ which was present at 
// first index will be shifted at last.


//     Example 2:
// Input: N = 1, array[] = { 3}
// Output: 3
// Explanation: Here only element is present and so 
// the element at first index will be shifted to 
// last index which is also by the way the first index.


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
            let temp = arr[0];
            for (let i = 1; i < array.length; i++) {

                array[i - 1] = array[i];
            }
            array[array.length - 1] = temp;

            resolve(array)
        }, 1000)
    })

}



rl.on("close", () => {


    bruteForce(arr).then(array => {
        setTimeout(() => {
            array.forEach((element, indx) => {
                console.log(element);
            })
        }, 2000)
    })



})

