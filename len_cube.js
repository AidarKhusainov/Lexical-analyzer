let readlineSync = require("readline-sync");
 
let lenCube = +readlineSync.question("Length:");

let areaOfCubeFace = lenCube * lenCube;
let totalSurfaceAreaOfCube = areaOfCubeFace * 6;
let volumeOfCube = areaOfCubeFace * lenCube;

console.log("The area of the cube face" + areaOfCubeFace);
console.log("The total surface area of the cube" + totalSurfaceAreaOfCube);
console.log("The volume of the cube" + volumeOfCube);