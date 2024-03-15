// 1. In the JavaScript code, select all the elements with the classes, and separately select the main container element.
let container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');

if (container && boxes) {
  // 2. Add event listeners to the main container, outputting to the console value of 4 for the useCapture argument set to false, and 1 for the useCapture argument set to true.
  container.addEventListener('click', function(event) {
    console.log('4: ', event.target.textContent);
  }, false);

  container.addEventListener('click', function(event) {
    console.log('1: ', event.target.textContent);
  }, true);

  // 3. For each of the nested elements, add click event listeners with a console.log() value of 3 for the useCapture argument set to false, and 2 for useCapture set to true.
  boxes.forEach(function(box) {
    box.addEventListener('click', function(event) {
      console.log('3: ', event.target.textContent);
    }, false);

    box.addEventListener('click', function(event) {
      console.log('2: ', event.target.textContent);
    }, true);
  });
} else {
  console.log("The container or boxes are not found!");
}
