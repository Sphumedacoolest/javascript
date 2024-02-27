// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("body").style.border = "3px solid black";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow";
// document.getElementById("leftarm").style.backgroundColor = "#FF0000";
// document.getElementById("body").style.backgroundColor = "#FF0000";
// document.getElementById("head").style.borderTop = "10px black solid";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("head").style.transform = "rotate(345deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";

// ANIMATING THE ROBOT

// .getElementById("righteye").onclick = moveUpDown
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click",moveUpDown)

function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10)
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 21) {
            clearInterval(animation);
        }
    }
}

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click",moveUpDown)

function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10)
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 21) {
            clearInterval(animation);
        }
    }
}

let nose = document.getElementById("nose");
nose.addEventListener("click",moveNoseUpDown)

function moveNoseUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10)
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 51) {
            clearInterval(animation);
        }
    }
}

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click",moveRightLeft)


function moveRightLeft(event) {
    console.log(event.target);
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame,10)
    function frame() {
        robotPart.style.left = left++ + "%";
        if (left === 71) {
            clearInterval(animation);
        }
    }
}

let rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click",moverightArmUpDown);

function moverightArmUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10)
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 36) {
            clearInterval(animation);
        }
    }
}
