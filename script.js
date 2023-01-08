for (let i = 0; i < 256; i++) {

    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    
    gridDiv.classList.add('gridDiv');

    
    gridDiv.setAttribute("id", "gridDiv");


    container.appendChild(gridDiv);

    gridDiv.addEventListener('mouseover', changeGridDivColour)

}

function changeGridDivColour(e) {
    let colour = `rgb(${[0, 0, 0]}`
    Object.assign(e.target.style, {
      backgroundColor : colour,
    });
  }

  function restartGame() {
    
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



/*
var element = document.getElementById('container');
var children = element.children;
for(var i=0; i<children.length; i++){
    var child = children[i];
    child.style.background = 'black';
}*/

/*


var cells = document.getElementsByClassName('gridDiv');

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", (event) => {
        console.log('hello mouse over');
        document.getElementById("gridDiv").style.background = 'black';
    
    }, false); 

}
*/



/*

//below is working for the first gridDiv

let cell = document.getElementById("gridDiv");


cell.addEventListener("mouseenter", (event) => {
    console.log('hello mouse over');
    document.getElementById("gridDiv").style.background = 'black';

}, false); 



*/


