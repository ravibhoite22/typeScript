"use strict";
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Mul"] = 1] = "Mul";
    Operation[Operation["Sub"] = 2] = "Sub";
    Operation[Operation["Div"] = 3] = "Div";
})(Operation || (Operation = {}));
console.log(4 /* Size.Large */);
function calculate(a, b, op) {
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
//# sourceMappingURL=enum.js.map