const container = document.querySelector("#container");
function randomColor(){
    const colorArray = ["red", "green", "blue"];
    return colorArray[Math.floor(Math.random()*3)];
}

function createGrid(squaresPerSide){
    for(let i=1; i<=squaresPerSide*squaresPerSide; i++){
        const div = document.createElement("div");
        div.style.height = `${960/squaresPerSide}px`;
        div.style.width = `${960/squaresPerSide}px`;
        div.setAttribute("class", "square");
        container.appendChild(div);
        
    }
    for(let square of container.querySelectorAll(".square")){
        square.addEventListener("mouseenter", ()=>{
            square.style.backgroundColor = randomColor();
            
        })
    }
        
    
}
createGrid(16);




const popUp = document.querySelector("#pop-up");
popUp.addEventListener("click", ()=>{
    const squaresPerSide = Number(prompt("Enter squares per side"));
    container.textContent = "";
    createGrid(squaresPerSide);



})




