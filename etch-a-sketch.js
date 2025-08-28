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

/*When the users mouse hovers over a box, it will change to black. Giving the etch-a-sketch effect
 */

//this selects all the elements with the grid-item class and stores them in a node list
let boxes = document.querySelectorAll(".grid-items");

boxes.forEach(box => {
    box.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(0, 0%, 0%)";
    });
})













