for (let i = 0; i < 256; i++) {

    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    
    gridDiv.classList.add('gridDiv');

    container.appendChild(gridDiv);

    gridDiv.addEventListener('mousemove', changeGridDivColour)

}

function changeGridDivColour(e) {
    e.target.style.background = "rgb(0, 0, 0)";
  }





function clearPad() {
    var element = document.querySelectorAll(".gridDiv");
    element.forEach(function (element, index) {
        console.log(element); // The element
        console.log(index); // The index in the NodeList
        element.style.backgroundColor = "rgb(255,255,255)";
    });
} 


//store user pad size numbers in a varable
//does this need to be square? 1 number from the user?
//attempt this with css grids, passing through information to the grid via user input





/*


function changePadSize() {
    let squaresPerside = prompt("Please enter number of Squares per side", "16");

    if (squaresPerside > 100) {
        alert('Please choose a number below 100')
    } else {


        let totalSquares = squaresPerside * squaresPerside;

        console.log(totalSquares)

        for (let i = 0; i < totalSquares; i++) {

            const container = document.querySelector('#container');
        
            const gridDiv = document.createElement('div');
            
            gridDiv.classList.add('gridDiv');
        
            container.appendChild(gridDiv);
        
            gridDiv.addEventListener('mouseover', changeGridDivColour)

            //styling gridDiv heigth and width in here as a js style thing and putting calculation to make sure it fits

            let newWidth = 320 / squaresPerside;
            let newheight = 320 / squaresPerside;

            console.log(newWidth)



            document.getElementsByClassName('gridDiv').style.width = '`${newWidth}`px';
            document.getElementsByClassName('gridDiv').style.height = '`${newWidth}`px';
        
        }
















    }

}
*/



    //e.target.style.background = "rgb(255,255,255)";


  





