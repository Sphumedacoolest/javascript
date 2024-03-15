// 1. Put the HTML output element into a variable object that you can use to display content on the page.
let outputDiv = document.querySelector('.output1');

// 2. Select both input fields.
let firstNameInput = document.querySelector('input[name="first"]');
let lastNameInput = document.querySelector('input[name="last"]');

// 4. Create a separate function to handle the output of the content to the page, updating the textContent of the output element.
function updateOutput() {
  outputDiv.textContent = `${firstNameInput.value} ${lastNameInput.value}`;
}

// 3. Add an event listener to the first input and the second input.
if (firstNameInput) {
  firstNameInput.addEventListener('change', updateOutput);
  // 6. Add four additional event listeners and listen for blur and focus on each input.
  firstNameInput.addEventListener('blur', function(event) {
    console.log('blur event on first name input');
  });
  firstNameInput.addEventListener('focus', function(event) {
    console.log('focus event on first name input');
  });
} else {
  console.log("First name input field is not found!");
}

if (lastNameInput) {
  lastNameInput.addEventListener('change', updateOutput);
  // 6. Add four additional event listeners and listen for blur and focus on each input.
  lastNameInput.addEventListener('blur', function(event) {
    console.log('blur event on last name input');
  });
  lastNameInput.addEventListener('focus', function(event) {
    console.log('focus event on last name input');
  });
} else {
  console.log("Last name input field is not found!");
}
