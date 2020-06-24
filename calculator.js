const resultBox = document.getElementById("calculator_result")

// Addition
const additionInput1 = document.getElementById("addition_number1");
const additionInput2 = document.getElementById("addition_number2");

function GetSum() {
    const result = 
        (Number(additionInput1.value) | 0)
        + 
        (Number(additionInput2.value) | 0)
    resultBox.innerHTML = "Sum: " + result;
}
//

// Subtraction
const subtractionInput1 = document.getElementById("subtraction_number1");
const subtractionInput2 = document.getElementById("subtraction_number2");

function GetDifference() {
    const result = 
        (Number(subtractionInput1.value) | 0)
        - 
        (Number(subtractionInput2.value) | 0)
    resultBox.innerHTML = "Difference: " + result;
}
//

// Multiplication
const multiplicationInput1 = document.getElementById("multiplication_number1");
const multiplicationInput2 = document.getElementById("multiplication_number2");

function GetProduct() {
    const result = 
        (Number(multiplicationInput1.value) | 0)
        *
        (Number(multiplicationInput2.value) | 0)
    resultBox.innerHTML = "Product: " + result;
}
//

// Division
const divisionInput1 = document.getElementById("division_number1");
const divisionInput2 = document.getElementById("division_number2");

function GetQuotient() {
    const result = 
        (Number(divisionInput1.value) | 0)
        /
        (Number(divisionInput2.value) | 0)
    resultBox.innerHTML = "Quotient: " + result;
}
//

// Exponent
const exponentInput1 = document.getElementById("exponent_number1");
const exponentInput2 = document.getElementById("exponent_number2");

function Exponent() {
    const result = 
        Math.pow((Number(exponentInput1.value) | 0),
        (Number(exponentInput2.value) | 0))

    resultBox.innerHTML = "Exponent: " + result;
}
//

// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }