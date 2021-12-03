const fs = require("fs");
const directions = ["forward","up","down"]


var inputTest = fs.readFileSync("./input-test.txt", "utf-8");
var inputTest = inputTest.split("\n");
var horizontalPosition = 0
var verticalPosition = 0

for (let i = 0; i < inputTest.length; i++) {
    const element = inputTest[i];
    

    if (element.includes("forward")) {
       let move = parseInt(element.replace("forward ",""))
        
        horizontalPosition = horizontalPosition + move

    } if (element.includes("backward")) {
        
    } if (element.includes("up")) {
        let move = parseInt(element.replace("up ",""))
        verticalPosition = verticalPosition - move
    } if (element.includes("down")) {
        let move = parseInt(element.replace("down ",""))
        verticalPosition = verticalPosition + move
    } else {
        
    }
    // console.log(horizontalPosition)
    // console.log(verticalPosition)
    // console.log(element)
}

console.log(verticalPosition)
console.log(horizontalPosition)
console.log("Answer Test")
console.log(verticalPosition*horizontalPosition)


var inputLive = fs.readFileSync("./input-live.txt", "utf-8");
var inputLive = inputLive.split("\n");
var horizontalPosition = 0
var verticalPosition = 0

for (let i = 0; i < inputLive.length; i++) {
    const element = inputLive[i];
    if (element.includes("forward")) {
       let move = parseInt(element.replace("forward ",""))
        
        horizontalPosition = horizontalPosition + move

    } if (element.includes("backward")) {
        
    } if (element.includes("up")) {
        let move = parseInt(element.replace("up ",""))
        verticalPosition = verticalPosition - move
    } if (element.includes("down")) {
        let move = parseInt(element.replace("down ",""))
        verticalPosition = verticalPosition + move
    } else {
        
    }
    // console.log(horizontalPosition)
    // console.log(verticalPosition)
    // console.log(element)
}

console.log("Answer Live")
console.log(verticalPosition*horizontalPosition)