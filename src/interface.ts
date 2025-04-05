interface Person {
  name: string;
  address: string;
  email: string;
  mobile: number;
  isAdmin?: boolean; //optional property
}

let person1: Person;

person1 = {
  name: "ravi",
  address: "pune",
  email: "ravi@gmail.com",
  mobile: 123456789,
};

console.log(person1);

interface GovID {
  readonly idNumber: number;
  idType: string;
}

interface Student extends GovID {
  roll: number;
  class: string;
}

let stud1: Student = {
  roll: 1,
  class: "10th",
  idNumber: 1234,
  idType: "lic",
};

interface Emp {
  empid: number;
  name: string;
  LWD: (date: Date) => void;
}

let emp1: Emp = {
  empid: 1,
  name: "Ravi",
  LWD: (date: Date) => {
    console.log(date.getDate());
  },
};
 console.log(emp1);
 
