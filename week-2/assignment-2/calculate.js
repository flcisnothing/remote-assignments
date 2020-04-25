// Assignment 2: Object
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

class ClassArgs {
  constructor(n1, n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

function FunctionArgs(n1, n2, op) {
  this.n1 = n1;
  this.n2 = n2;
  this.op = op;
}

calculate({ n1: 1, n2: 2, op: "+" });
calculate(new ClassArgs(1, 2, "+"));
calculate(new FunctionArgs(1, 2, "+"));
