/*etch-a-sketch.js */

//container for 16x16 grid
let container = document.querySelector("#main-cont"); 

let ogCont = document.createElement("div");
ogCont.classList.toggle("grid-cont")
container.appendChild(ogCont); 



let gridCont = document.querySelector(".grid-cont");
for (let i = 0; i < 16; ++i) {
    for (let j = 0; j < 16; ++j) {
        let gridBox = document.createElement("div"); 
        gridBox.classList.toggle("grid-items");
        gridCont.appendChild(gridBox); 
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



/*New branch => featureBranch created for practice */

/* 
A new feature incoming: 
This feautre will allow the user to click on the button newGrid and input a number between 1-100. 
Then a new grid will be created with the dimensions the user inputs. NxN.
*/


/*
Psuedo: 
-create button above grid for user input.

-when button is clicked a popup will appear asking the user to input a number between 1-100.
    -create variables newRow / newCol and store userInput in them.
    -calculate new height/width for each box by dividing 800 by the number the user inputs.
    -create new grid with nested for loop updating the boxes height/width
    -update height/width for each box
-remove old grid
-display new grid on screen. 
*/


const btn = document.querySelector("#newGrid"); 

btn.addEventListener("click", () => {
    
    /*only accepts number between 1-100 */
    newRowCol = parseInt(window.prompt("Please enter the new dimensions for the grid: e.g 10")); 
        let askAgain = () => {
            if(newRowCol > 100) {
                newRowCol = parseInt(window.prompt("Please enter a number between 1-100."));
                askAgain(); //recursive statment
            }
        }

        askAgain(); 

    /*while the first child of an element exists, container.removeChild removes it. */
    let removeGrid = (parent) => {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }

    removeGrid(container); 

    let newGrid = document.createElement("div"); 
    newGrid.classList.toggle("grid-cont");
    container.appendChild(newGrid); 

    let newCont = document.querySelector(".grid-cont");
    newBox = 800/newRowCol;

    for (let i = 0; i < newRowCol; ++i){
        for (let j = 0; j < newRowCol; ++j){
            let gridBox = document.createElement("div"); 
            gridBox.classList.toggle("grid-items");
            gridBox.style.width = newBox + "px"; 
            gridBox.style.height = newBox + "px";

            newCont.appendChild(gridBox); 

        }
    }

    let newBoxes = document.querySelectorAll(".grid-items"); 
    newBoxes.forEach(box => {
    box.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(0, 0%, 0%)";
    });
})
})

let newColor = document.querySelector("#color-picker"); 

newColor.addEventListener("input", (event) => {

        userColor = event.target.value; 

    let newBoxes = document.querySelectorAll(".grid-items"); 

    newBoxes.forEach(box => {
        box.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = userColor; 
        })
    })

})


