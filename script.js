

for (let i = 0; i < 256; i++) {

    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    
    gridDiv.classList.add('gridDiv');
    gridDiv.setAttribute("id", "gridDiv");
    
    container.appendChild(gridDiv);



}

let cell = document.getElementById("gridDiv");
cell.addEventListener("mouseenter", (event) => {
    // highlight the mouseenter target
    event.cell.style.backgroundColor = "purple";
    console.log('hello mouse over');

}, false); 



//cell.addEventListener("mouseout", func1, false);






