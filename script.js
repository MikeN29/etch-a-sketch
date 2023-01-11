
let gridSize = 0;

function changePadSize() {
    let squaresPerside = prompt("Please enter number of Squares per side", "16");
        if (squaresPerside > 100) {
            alert('Please choose a number below 100')
        } else {
            let gridSize = squaresPerside * squaresPerside;

            changeGridSize(squaresPerside, gridSize)

            document.getElementById("choosePadSize").disabled = true;

       
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

        let squareSize = 500/squaresPerside;

        let elements = document.getElementsByClassName("gridDiv");
            for (let j = 0; j < elements.length; j++) {
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
        console.log(element);
        console.log(index);
        const container = document.querySelector('#container');

        const gridDiv = document.getElementById('gridDiv');
           
        container.removeChild(gridDiv);

        document.getElementById("choosePadSize").disabled = false;

        
    });
} 




/* 1. sort issue of change pad size button - disable after use? once pad is clear bring it back? DONE
   2. style webpage
   3. add colour option

*/


