const body = document.querySelector("body");
const IMG_NUMBER = 4;

function resizeWindow() {
    body.width = window.innerWidth;
    body.height = window.innerHeight;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/dark${imgNumber}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number + 1; 
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();

window.addEventListener('resize', resizeWindow);