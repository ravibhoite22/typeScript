"use strict";
function calculateTax(income) {
    console.log(income);
    return 0;
}
function addUser(name, id, email) {
    console.log(name);
    console.log(id);
    console.log(email);
}
addUser("ravi", 1, "ravi@email.com");
addUser("ravi", 2); //optinal argument
function addRole(id, role = "user") {
    console.log(role + " & " + id);
}
addRole(1, "admin");
addRole(2); //set default value to argument
//# sourceMappingURL=functions.js.map