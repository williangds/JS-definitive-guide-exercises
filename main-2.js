/*
    x1 = number
    x2 = string
    x3 = boolean true
    x4 = boolean false
    x5 = null
    x6 = undefined
    x7 = array
    x8 = object 
*/

var x1, x2, x3, x4, x5, x6, x7, x8;

x1 = Math.PI;
x2 = "string";
x3 = true;
x4 = false;
x5 = null; 
x6 = undefined;
x7 = [2, 3, 5, 7, 11];
x8 = {
    p1: "property 1",
    p2: true,
    p3: null
}

var variables = [x1, x2, x3, x4, x5, x6, x7, x8];

for (let i = 0; i <variables.length; i++) {
    console.log(typeof(variables[i]))
}
