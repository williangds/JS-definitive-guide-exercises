function fatorial(n) {
  var produto = 1;
  while (n>1) {
    produto *= n;
    n--;
  }
  return produto;
}


function modulo(x) {
  if (x >= 0) {
    return x;
  } else  {
    return x*(-1);
  }
}

function fatorial2(n) {
  var i;
  var produto = 1;
  for (let i = 2; i <= n; i++) {
    produto *= i;
  }
  return produto;
}

//console.log(fatorial2(4));
//
//define a new constructor function to initializa a point

function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.r = function () {
  return Math.sqrt(
    this.x * this.x + 
    this.y * this.y
  )
}

//use the constructor function with the keyword "new" to create a new instance

var p = new Point(1,1)

console.log(p);

//define new Point methods by assign them to the prototype ojbect with the constructor function

