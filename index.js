

let x = 20;
let y = 10;
let z = 5;

function swapThreeNumbers(x, y, z) {

  x = x + y + z;
  y = x - y - z;
  z = x - y - z;
  x = x - y - z;

  return [x, y, z]

}

console.log(swapThreeNumbers(x, y, z))

