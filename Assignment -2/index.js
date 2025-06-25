// QS  1. Write code to display from 1 to 100 but just even numbers.

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// QS 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


function calculator(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}


console.log(calculator(10, 5, '*'));  // Output: 50

// QA - 3You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.



function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return 'Invalid salary';
    }

    const tax = salary * taxRate;
    return tax;
}


console.log(findTax(1200000));  // Output: 240000

// QS -4 Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfDigitProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let maxLength = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(str1[i] || 0);
        let digit2 = parseInt(str2[i] || 0);
        sum += digit1 * digit2;
    }

    return sum;
}


console.log(sumOfDigitProducts(6, 34)); // Output: 24

