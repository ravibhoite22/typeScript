/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 */
var myTuple;
myTuple = [5, false, "ravi"];
console.log(myTuple);
myTuple.push("bhoite");
console.log(myTuple);
//readonly tuple : 
var myReadOnlyTuple;
myReadOnlyTuple = [33, "ravi"];
//myReadOnlyTuple.push("bhoite")//will show error as readonly
//Named tuples allow us to provide context for our values at each index.
var nameTuple; //assign name for type <name>:<dataType>
nameTuple = [33, "ravi"];
//destructive tuple: Since tuples are arrays we can also destructure them
var desTuple;
desTuple = [true, 30];
var flag = desTuple[0], No = desTuple[1];
console.log("desTuple ", flag);
console.log("desTuple ", No);
