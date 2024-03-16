// 1. Select the input, output, and button elements from the page
let emailInput = document.getElementById('emailInput');
let output = document.getElementById('output');
let button = document.getElementById('button');

// 2. Add an event listener to the button
button.addEventListener('click', validateEmail);

function validateEmail() {
    // Get the current value in the input field
    let email = emailInput.value;
    
    // Create a blank response value
    let response = '';
    
    // 3. Add a test with the string value from the input field and the expression for email format
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        // If the test result is false, update the response output to say Invalid Email
        response = 'Invalid Email';
        // Change the output color to red
        output.style.color = 'red';
    } else {
        // 4. If the condition of the test returns true, add a response that confirms the email format is correct
        response = 'Email format is correct';
        // Change the text color of output to green
        output.style.color = 'green';
    }
    
    // 5. Output the response value into the output element
    output.textContent = response;
}
