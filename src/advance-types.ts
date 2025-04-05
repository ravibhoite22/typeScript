function covert(currency: number | string): void {
  //union type using '|'
  if (typeof currency === "number") {
  }
}

type student = {
  rollNo: number;
  name: string;
};

type school = {
  class: string;
  address: string;
};

type exam = student & school; // intersection type using '&'

let exam1: exam = {
  name: "ravi",
  rollNo: 1,
  class: "10th",
  address: "pune",
};

// literal type
type Quantity = 50 | 100;
let qty: Quantity = 50;

type Measurement = "mm" | "cm" | "inch";
let measure: Measurement = "cm";

//nullable type
function printMsg(msg: string | null) {
  console.log(msg);
}

printMsg('ravi');
printMsg(null);

