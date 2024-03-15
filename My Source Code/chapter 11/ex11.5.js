// 1. Select each page element, including the div, the input field, and the button element. 
let outputDiv = document.querySelector('.output');
let inputField = document.querySelector('input[name="message"]');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

// 2. Create an empty array called log, which will be used to track and log all the events.
let log = [];

// 3. Create a function that will capture the event object details in an object, adding it to the log array.
function trackAndLog(event) {
  let eventDetails = {
    inputValue: inputField.value,
    eventType: event.type,
    targetClass: event.target.className,
    targetTag: event.target.tagName
  };
  
  log.push(eventDetails);
  
  // 4. Get the value of the content within the input and assign that value to the textContent of the div.
  outputDiv.textContent = inputField.value;
  
  // 5. Clear the div content after the information is added to the log array.
  inputField.value = '';
}

// 6. Add an event listener to both of the first two buttons that sends the event object to the tracking function created in the earlier steps.
if (btn1) {
  btn1.addEventListener('click', trackAndLog);
} else {
  console.log("Button 1 is not found!");
}

if (btn2) {
  btn2.addEventListener('click', trackAndLog);
} else {
  console.log("Button 2 is not found!");
}

// 7. Attach an event listener to the third button that outputs the log content to the console.
if (btn3) {
  btn3.addEventListener('click', function() {
    console.log(log);
  });
} else {
  console.log("Button 3 is not found!");
}
