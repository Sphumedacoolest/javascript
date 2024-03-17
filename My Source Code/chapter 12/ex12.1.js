//Select each of the three page elements using JavaScript
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let output = document.getElementById('output');

//Add an event listener to the button
document.getElementById('button').addEventListener('click', lookup);

//Create a function named lookup()
function lookup() {
    //Assign the output element's text content to a variable named s
    let s = output.textContent;
    
    //Assign the value of the input we are replacing to another variable named rt
    let rt = input1.value;
    
    //Create a new regex with the value of the first input field
    let regex = new RegExp(rt, 'g');
    
    //Using the regex, check for a match with the match() method
    if (s.match(regex)) {
        //If the match is found, use replace() to set the new value
        s = s.replace(regex, input2.value);
    }
    
    //Update the output area with the newly created and updated text output
    output.textContent = s;
}
