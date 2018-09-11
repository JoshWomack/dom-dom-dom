
// create global variables
const addSquareButton = document.createElement('button');
const mainContainer = document.createElement('div');


// add text conent to button
addSquareButton.textContent = 'Add Square';
addSquareButton.display = 'block';

// set element IDs
mainContainer.id = 'main-container';
addSquareButton.id = 'btn-add-sqr';

// append button and main container to body
document.body.appendChild(addSquareButton);
document.body.appendChild(mainContainer);

//button clicked event listener
addSquareButton.addEventListener("click", function () {

    //create new square and append to main container
    let newDiv = document.createElement('div');
    newDiv.className = 'square';
    mainContainer.appendChild(newDiv);
    
    // assign ID to new square as number of squares at time of button click
    let squares = document.getElementsByClassName('square');
    newDiv.id = squares.length - 1;

    // add event listeners to the newly create 'square' div
    newDiv.addEventListener('mouseover', showID);
    newDiv.addEventListener('mouseout', unshowID);
    newDiv.addEventListener('click', changeColor);
    newDiv.addEventListener('dblclick', onDoubleClick);
});

//display text content of square when mouseover
function showID(e) {
    e.target.textContent = e.target.id;
}

//remove text content when mouse out
function unshowID(e) {
    e.target.textContent = '';
}

// single click -change of the color of the 'square' div to a random color
function changeColor(e) {
        let red = Math.floor(Math.random(.2,1) * 255);
        let blue = Math.floor(Math.random(.2,1) * 255);
        let green = Math.floor(Math.random(.2,1) * 255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// double click - remove the previous square or next square depending on whether the ID value of the square div is odd or even
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


