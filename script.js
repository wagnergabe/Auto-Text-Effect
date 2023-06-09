const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

let text = "I love my cat Luna";
let inx = 1;
let speed = 300 / speedEl.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, inx)

    inx++

    if(inx > text.length) {
        inx = 1;
    }

    setTimeout(writeText, speed)
}