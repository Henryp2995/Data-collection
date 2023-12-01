let cell = [
    ["ID", "Name", "Occupation", "Age"], 
    [42, "Bruce", "Knight", 41],
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctors Assistant", 26],
]
for (let i = 1; i < cell.length; 
    i++)
// iterates through each item in arrays
{console.log(cell[i])}
let columns = cell[0].length 
console.log(columns)
// setting the cells to the length of the array lets it expand to any number of columns needed
// skipped the last part 2 because my array is already 2d
// part 3 
let objCsv = {
    Bruce: {
        ID: 42,
        Occupation: "Knight",
        Age: 41
    },
    Bob: {
        ID:57,
        Occupation: "Fry Cook",
        Age:19
    },
    Blaine: {
        ID:63,
        Occupation: "Quiz Master",
        Age:58
    },
    Bill: {
        ID:98,
        Occupation: "Doc asst",
        Age: 26
    }

}
console.log(objCsv)



let modifiedArray = cell.pop()

console.log(modifiedArray)

let newAddition = cell.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })

console.log(cell)

cell.splice(5, 0, { id: "7", name: "Bilbo", occupation: "None", age: "111" })
// above I deleted the last array and inserted an object at index 1
console.log(cell)
let jsonString = JSON.stringify(objCsv);

console.log(jsonString)
// converted my objects into a single string