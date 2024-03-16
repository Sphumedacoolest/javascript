// 1. Select each of the three page elements using JavaScript
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let output = document.getElementById('output');

// 2. Add an event listener to the button
document.getElementById('button').addEventListener('click', lookup);

// 3. Create a function named lookup()
function lookup() {
    // Assign the output element's text content to a variable named s
    let s = output.textContent;
    
    // Assign the value of the input we are replacing to another variable named rt
    let rt = input1.value;
    
    // 4. Create a new regex with the value of the first input field
    let regex = new RegExp(rt, 'g');
    
    // Using the regex, check for a match with the match() method
    if (s.match(regex)) {
        // 5. If the match is found, use replace() to set the new value
        s = s.replace(regex, input2.value);
    }
    
    // 6. Update the output area with the newly created and updated text output
    output.textContent = s;
}
