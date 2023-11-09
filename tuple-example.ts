/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 */

let myTuple : [number,boolean,string];

myTuple = [5,false,"ravi"];

console.log(myTuple);

myTuple.push("bhoite");

console.log(myTuple);

//readonly tuple : 
let myReadOnlyTuple : readonly [number,string];
myReadOnlyTuple = [33,"ravi"]
//myReadOnlyTuple.push("bhoite")//will show error as readonly

//Named tuples allow us to provide context for our values at each index.

let nameTuple : [age:number,name:string]; //assign name for type <name>:<dataType>

nameTuple = [33,"ravi"];


//destructive tuple: Since tuples are arrays we can also destructure them

let desTuple : [boolean,number];

desTuple = [true,30];

let [flag,No] = desTuple;

console.log("desTuple ",flag);
console.log("desTuple ",No);
