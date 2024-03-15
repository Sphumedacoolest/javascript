// 1. Create a blank element on the page and assign a class to it.
let div = document.createElement('div');
div.className = 'myElement';
document.body.appendChild(div);

// 2. Select the element using its class name.
// 3. Assign a variable to the element object from the page.
let element = document.querySelector('.myElement');

// 4. Update the content of the element to say hello world.
element.textContent = 'Hello World';

// 5. Using the style properties of the element, update the height and width, then add a default background color to it.
element.style.height = '200px';
element.style.width = '200px';
element.style.backgroundColor = 'grey';

// 6. Create a function to handle two arguments, the first being a color value as a string and the second being the event object of the trigger.
function changeColorAndLogEvent(color, event) {
  // 7. In the function, output the color value to the console, and for the event, output the event type to the console.
  console.log('Color:', color);
  console.log('Event Type:', event.type);
  
  // Change the background color of the element
  element.style.backgroundColor = color;
}

// 8. Add event listeners to the element: mousedown, mouseover, mouseout, and mouseup. 
// For each of these events, send two arguments to the function that you created: a color value and the event object.
element.addEventListener('mousedown', function(event) {
  changeColorAndLogEvent('green', event);
});

element.addEventListener('mouseover', function(event) {
  changeColorAndLogEvent('red', event);
});

element.addEventListener('mouseout', function(event) {
  changeColorAndLogEvent('yellow', event);
});

element.addEventListener('mouseup', function(event) {
  changeColorAndLogEvent('blue', event);
});
