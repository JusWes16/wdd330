// Requirement 1
req1 = () => {
    let input = document.getElementById('input').value;
    document.getElementById('output').textContent = "Your input: " + input;
}

// Requirement 2

req2 = () => {
    let input = parseInt(document.getElementById('input2').value);
    const sum = sumNumbers(input);
    document.getElementById('output2').textContent = "Sum: " + sum;
}

sumNumbers = (number) => {
    let sum = 0;
    for (let i=0; i < number; i++){
        sum += (i + 1);
    }
    return sum;
}

// Requirement 3
req3 = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('output3').textContent = "Sum: " + (num1 + num2);

}