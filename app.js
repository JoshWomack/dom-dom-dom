
// create global variables
const addSquareButton = document.createElement('button');
const mainContainer = document.createElement('div');
let allSquares;

// style button
addSquareButton.textContent = 'Add Square';
addSquareButton.display = 'block';

// set element IDs
mainContainer.id = 'main-container';
addSquareButton.id = 'btn-add-sqr';

// append button and main container to body
document.body.appendChild(addSquareButton);
document.body.appendChild(mainContainer);

//button clicked
addSquareButton.addEventListener("click", function () {

    //create new square and append to main container
    let newDiv = document.createElement('div');
    newDiv.className = 'square';
    mainContainer.appendChild(newDiv);
    
    // assign ID to new square as number of squares at time of button click
    let squares = document.getElementsByClassName('square');
    newDiv.id = squares.length - 1;

    //obtain node list of all 'square' divs
    allSquares = document.querySelectorAll('.square');

    //loop over each node and add event listeners
    allSquares.forEach(function (square) {
        square.addEventListener('mouseover', showID);
        square.addEventListener('mouseout', unshowID);
        square.addEventListener('click', changeColor);
        square.addEventListener('dblclick', onDoubleClick);

    });  
});

//display the text content of idDiv when hovering
function showID(e) {
    // e.target.childNodes[0].style.display = 'block';
    e.target.textContent = e.target.id;
}

//no long display the text content of idDiv when hovering stops
function unshowID(e) {
    e.target.textContent = '';
}

//change of the color of the 'square' div to a random color
function changeColor(e) {
        let red = Math.floor(Math.random(.2,1) * 255);
        let blue = Math.floor(Math.random(.2,1) * 255);
        let green = Math.floor(Math.random(.2,1) * 255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

//remove the previous square or next square depending on whether the ID value of the square div is odd or even
function onDoubleClick(e) {
    if (parseInt(e.target.id) % 2 === 0) {
        if (e.target.nextSibling === null) {
            alert('There is no square after this one.');
        }   else {
        e.target.nextSibling.outerHTML = '';
        }
    } else if (parseInt(e.target.id) % 2 === 1) {
        if (e.target.previousSibling === null) {
            alert('There is no square before this one.');
        }   else {
        e.target.previousSibling.outerHTML = '';
        }
    } 
}

