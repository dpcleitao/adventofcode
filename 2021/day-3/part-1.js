// Data Section
const fs = require("fs");
var inputTest = fs.readFileSync("./input-test.txt", "utf-8");
var inputTest = inputTest.split("\n");
var inputLive = fs.readFileSync("./input-live.txt", "utf-8");
var inputLive = inputLive.split("\n");
// Part Specific
var digit = []
function updateGama(d, i) {
    var base = digit[i]
    digit[i] = (base+d)
} 
var getMax = function (str) {
    var max = 0,
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };

inputLive.forEach(element => {
    for (let c = 0; c < element.length; c++) {
        const character = element[c];
        if (digit[c]== null) {
            digit.push(character)
        } 
        updateGama(character,c)
        // 
    }
});

var gama = ""
var epsilon = ""
digit.forEach(element => {
    console.log(gama = gama + getMax(element))
    if (getMax(element) == 1) {
        epsilon = (epsilon + "0")
    } else {
        epsilon = (epsilon + "1")
    }
    console.log(epsilon)
});
console.log("----")
console.log(parseInt(gama, 2))
console.log(parseInt(epsilon, 2))
console.log((parseInt(epsilon, 2)*parseInt(gama, 2)))

