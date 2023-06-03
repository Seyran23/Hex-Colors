const body = document.querySelector("body");
const hexCodeSpan = document.querySelector("span");
const btn = document.querySelector(".btn");


const hexNums = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


function randomColorChange() {
    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexNums.length);
        hexCode += hexNums[index];
    }
    hexCodeSpan.innerHTML = hexCode;
    body.style.backgroundColor = `#${hexCode}`;
}


btn.addEventListener('click', randomColorChange);