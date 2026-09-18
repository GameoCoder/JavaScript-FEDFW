function add(x,y) {
  console.log(`Adding ${x} and ${y}`);
  console.log(x + y);
}

function subtract(x, y) {
  console.log(`Subtracting ${y} from ${x}`);
  console.log(x - y);
}

function execute(fn, a, b) {
  fn(a, b);
}

execute(add, 10, 5);
execute(subtract, 5, 3);
