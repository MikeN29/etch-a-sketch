



let gridSize = 0;

function changePadSize() {
    let squaresPerside = prompt("Please enter number of Squares per side", "16");

    if (squaresPerside > 100) {
        alert('Please choose a number below 100')
    } else {


        let gridSize = squaresPerside * squaresPerside;

        console.log(gridSize)
        changeGridSize(squaresPerside, gridSize)
       

    }

}

function changeGridSize(squaresPerside, gridSize) {


for (let i = 0; i < gridSize; i++) {

    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    
    gridDiv.classList.add('gridDiv');

    container.appendChild(gridDiv);

    gridDiv.setAttribute("id", "gridDiv");

    gridDiv.addEventListener('mousemove', changeGridDivColour)
    
    //gridDiv.addEventListener('mouseup', changeGridDivColour)
    //gridDiv.addEventListener('mousedown', changeGridDivColour)

    let squareSize = 320/squaresPerside;

    console.log(squareSize)

    let elements = document.getElementsByClassName("gridDiv");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.width=(squareSize+"px");
        elements[j].style.height=(squareSize+"px");
    }
}
}



function changeGridDivColour(e) {
    e.target.style.background = "rgb(0, 0, 0)";
    

  }


function clearPad() {
    var element = document.querySelectorAll(".gridDiv");
    element.forEach(function (element, index) {
        console.log(element); // The element
        console.log(index); // The index in the NodeList
        //element.style.backgroundColor = "rgb(255,255,255)";
        const container = document.querySelector('#container');

        const gridDiv = document.getElementById('gridDiv');
           
        container.removeChild(gridDiv);
        
    });
} 




//store user pad size numbers in a varable
//does this need to be square? 1 number from the user?
//attempt this with css grids, passing through information to the grid via user input











    //e.target.style.background = "rgb(255,255,255)";


  
