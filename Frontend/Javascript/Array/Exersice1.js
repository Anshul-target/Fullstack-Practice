const characters = [{
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male"
},
{
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
},
{
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
},
{
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
},
]

// Array.prototype.Map

// Get an array of all names

const names = characters.map(obj => obj.name);
console.log("Get an array of all names", names);
// Get an array of all heights
const height = characters.map(obj => obj.height);
console.log("Get an array of all heights", height);
// Get an array of objects with just name and height properties
const height_name = characters.map(obj => ({
    name: obj.name,
    height: obj.height
}))

console.log("Get an array of objects with just name and height properties", height_name)


// Get an array of all first names
const allFirstName = characters.map(obj => obj.name.split(" ", 1)[0])
console.log(allFirstName);


// Get an array of characters' names reversed.

const reversedName = characters.map(obj => {
    let orgName = obj.name;
    let reverseString = "";
    for (orgChar of orgName) {
        reverseString = orgChar + reverseString;
    }
    return reverseString
}
)

console.log("Array of characters' names reversed", reversedName);


// Get an array of characters' names with vowels removed
namesWithVowelRemoved = characters.map(obj => {
    obj.replace(/[aeiou]/gi, " ")


})




