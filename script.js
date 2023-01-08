for (let i = 0; i < 256; i++) {

    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    
    gridDiv.classList.add('gridDiv');

    
    gridDiv.setAttribute("id", "gridDiv");


    container.appendChild(gridDiv);



}

/*
document.querySelector("gridDiv").addEventListener("mouseover", function () {
    document.querySelector("gridDiv").style.background = 'black';})*/




/*var cells = document.getElementsByClassName('gridDiv');
var mainDiv = document.getElementById('container');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
        mainDiv.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    cells[i].addEventListener('mouseleave', function () {
        mainDiv.style.backgroundColor = 'black';
    });
}*/








let cell = document.getElementById("gridDiv");


cell.addEventListener("mouseenter", (event) => {
    // highlight the mouseenter target
    //event.cell.className = "gridDivHover";
    console.log('hello mouse over');

    //event.cell.setAttribute("id", "gridDivHover");
    document.getElementById("gridDiv").style.background = 'black'

    
    

}, false); 

console.log(cell)


//cell.addEventListener("mouseout", func1, false);






