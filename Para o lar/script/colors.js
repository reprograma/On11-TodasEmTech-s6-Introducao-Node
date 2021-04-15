let fs = require('fs');
let colors = fs.readFileSync('../Data/colors-rgb.json', 'utf8');


let getColors = JSON.parse(colors);

console.log("cornsilk  - rgb ", getColors.cornsilk);