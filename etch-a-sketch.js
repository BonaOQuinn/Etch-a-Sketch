/*etch-a-sketch.js */

//container for 16x16 grid
let container = document.querySelector(".grid-cont"); 




for (let i = 0; i < 16; ++i) {
    for (let j = 0; j < 16; ++j) {
        let gridBox = document.createElement("div"); 
        gridBox.classList.toggle("grid-items");
        container.appendChild(gridBox); 
    }
}









