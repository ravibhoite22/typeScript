function print<T>(lable: T): T {
    console.log(lable);
    return lable;
}

print("Ravi");
print(8877);
print(false)
print([1, 2, 3, 4, 5]);

function swap<T1, T2>(num1: T1, num2: T2): [T2, T1] {
    return [num2, num1];
}

let result = swap(1,2);
console.log(result);

let result2 = swap("ravi",2);
console.log(result2)

let result3 = swap(true,false);
console.log(result3)
