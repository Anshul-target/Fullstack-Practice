// Check if an Array is Sorted
// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non - decreasing) order or not.If the array is sorted then return True, Else return False




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


const isSorted = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                return 0;

            }
            else
                continue;
        }
    }
    return 1;
}

function solveByBruteForceMethod(array) {

    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log("Solving by BruteForce method...");
            const result = isSorted(array)
            resolve(result)
        }, 2000)
    })
}

function betterApproach(array) {

    return new Promise((resolve, rejects) => {

        setTimeout(() => {
            console.log("Solving with a better approach");
        }, 1000)
        let i = 0;
        let j = 1
        let notSorted;
        while (i < arr.length && j < arr.length) {

            arr[i] > arr[j] ? notSorted = true : i++, j++
            if (notSorted) {
                resolve(0)
            }
            continue;
        }
        resolve(1)

    })

}

rl.on("close", () => {
    console.log(arr);

    const promise = solveByBruteForceMethod(arr)

    promise.then(result => {
        setTimeout(() => {

            result ? (console.log("Array is sorted")) : console.log("Array is not sorted")
        }, 1000)

        setTimeout(() => {
            console.log("Time complexity is O(N2)");
        }, 2000)
        return betterApproach(arr);
    }).then(result => {
        setTimeout(() => {
            result ? console.log("Array is sorted") : console.log("Array is not sorted")


        }, 2000)

        setTimeout(() => {
            console.log("Time complexity is O(N)");

        }, 3000)
    })
        .catch(err => console.error(err));

})

