// 1. Set up styling for an element
let box = document.createElement('div');
box.style.height = '100px';
box.style.width = '100px';
box.style.position = 'absolute';
box.style.backgroundColor = 'purple';

// 2. Create an element that you want to move on the page.
document.body.appendChild(box);

// 3. Select and store the element using JavaScript.
let movingBox = document.querySelector('div');

// 4. Set up an object with values for speed, direction, and position.
let boxProperties = {
    speed: 5,
    direction: 1,
    position: 0
};

// 5. Add an event listener for if the element is clicked on.
movingBox.addEventListener('click', function() {
    // 6. Set a default value of 30 for the value of the interval counter.
    let counter = 30;

    // 7. If the counter is less than 1, then end the interval and clear it.
    let intervalId = setInterval(function() {
        if (counter < 1) {
            clearInterval(intervalId);
        } else {
            // 9. While in motion, check if the position value is greater than 800 or less than 0.
            if (boxProperties.position > 800 || boxProperties.position < 0) {
                // Change direction
                boxProperties.direction *= -1;
            }

            // Update position
            boxProperties.position += boxProperties.speed * boxProperties.direction;

            // 10. Update the style.left position value of the element.
            movingBox.style.left = boxProperties.position + 'px';

            // 11. Output the result to the console.
            console.log('Box position: ' + boxProperties.position + 'px');

            counter--;
        }
    }, 100); // Interval set to 100ms
});
