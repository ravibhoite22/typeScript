function calculateTax(income: number): number {
  console.log(income);
  return 0;
}

function addUser(name: string, id: number, email?: string): void {
  console.log(name);
  console.log(id);
  console.log(email);
}

addUser("ravi", 1, "ravi@email.com");
addUser("ravi", 2); //optinal argument

function addRole(id: number, role = "user"): void {
  console.log(role + " & " + id);
}

addRole(1, "admin");
addRole(2); //set default value to argument
