enum Operation {
  Add,
  Mul,
  Sub,
  Div,
}

const enum Size {
  Small = 2,
  Medium,
  Large,
}

console.log(Size.Large);


function calculate(a: number, b: number, op: Operation) {
  switch (op) {
    case 0:
      return a + b;
    case 1:
      return a * b;
  }
}

const res = calculate(2, 3, Operation.Add);
console.log(res);

const res1 = calculate(6, 3, 0);
console.log(res1);

const res2 = calculate(5, 3, Operation.Mul);
console.log(res2);
