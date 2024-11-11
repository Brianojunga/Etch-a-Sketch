const grid = document.querySelector(".grid-container")
const gridbuttons = document.querySelector(".grid-buttons-container")
const reset = document.querySelector(".reset")
const black = document.querySelector(".black")
const rgb = document.querySelector(".rgb")
const start = document.querySelector(".start")
const startbtn = document.querySelector(".startbtn")
const exit = document.querySelector(".exit")
const buttons1 = document.querySelector(".buttons1")
const buttons2 = document.querySelector(".buttons2")
const para = document.querySelector(".para")




function getBoxesPerRow(){
    let boxPerRow = prompt("input the number of boxes you want");

    while(true){
        if (boxPerRow == null){
            return null
        }else if(boxPerRow >= 2 && boxPerRow <= 100) {
            return boxPerRow
        }else{
            alert("The number should be greater than 2 and less than 100")
            boxPerRow = parseInt(prompt("input the number of boxes you want"))
        }
    }
    
}

function createEtchSketch(){
    start.style.display = "none";

    let boxesPerRow = getBoxesPerRow();

    if(boxesPerRow === null){
        const paragraph = document.createElement("h2");
        paragraph.textContent = " You quit Etch-a-Sketch"
        para.appendChild(paragraph)
        setTimeout(startGame, 2000);
    }else{

        gridbuttons.style.display = "flex";
        
        
        const containerBoxes = boxesPerRow * boxesPerRow;

        grid.replaceChildren();


        for(let i = 1; i <= containerBoxes; i++){
        const div = document.createElement("div");
        div.classList.add("box");

        div.style.width =`calc(100% /${boxesPerRow})`;
        div.style.height =`calc(100%/${boxesPerRow})`;
        grid.appendChild(div);
        }

        const boxes = document.querySelectorAll(".box");

        boxes.forEach((box) => {box.addEventListener("mouseover", () => box.style.backgroundColor = "black")});
        

        function getRgb(){
            const r = Math.floor(Math.random()* 256);
            const g = Math.floor(Math.random()* 256);
            const b = Math.floor(Math.random()* 256);
            return `rgb(${r}, ${g}, ${b})`
        }


        function blackBackground(){
            boxes.forEach((box) => {box.addEventListener("mouseover", () => box.style.backgroundColor = "black")});
        }

        function rgbBackground(){
            boxes.forEach((box) => {box.addEventListener("mouseover", () => box.style.backgroundColor = getRgb())})
        }

        rgb.addEventListener("click", () => rgbBackground());
        black.addEventListener("click", () => blackBackground());
        reset.addEventListener("click", () =>  boxes.forEach(box => box.style.backgroundColor = "white"));
        exit.addEventListener("click", () => startGame() )
            }
}

function startGame(){
    start.style.display = "flex";
    gridbuttons.style.display = "none";
    para.replaceChildren();

}
startbtn.addEventListener("click", () => createEtchSketch() )


