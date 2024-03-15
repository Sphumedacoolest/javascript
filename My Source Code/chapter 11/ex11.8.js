// 2. Using JavaScript, select the page elements.
let output = document.querySelector('.output');
let inputs = document.querySelectorAll('input');

// 3. Using forEach(), iterate through all the input elements from the page.
inputs.forEach(function(input) {
  // 4. Add a keydown event listener and check if the value is a number.
  input.addEventListener('keydown', function(event) {
    if (!isNaN(event.key)) {
      // If it is a number, then add it to the output area.
      output.textContent += event.key;
    }
  });

  // 5. On keyup, output to the console the value of the key.
  input.addEventListener('keyup', function(event) {
    console.log('Key up:', event.key);
  });

  // 6. Check if there was a paste in the input field.
  input.addEventListener('paste', function(event) {
    // If there was, then you can output the word paste to the console.
    console.log('Paste event');
  });
});
