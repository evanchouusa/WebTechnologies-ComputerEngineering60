/*
Evan Chou 
COEN60 Lab 6
Lab6 javascript
*/

window.onload = function() {
    var colors = document.getElementById("colors");
    colors.onclick = changeColors;

    var add = document.getElementById("add");
    add.onclick = addSquare;

    var deletes = document.getElementById("delete");
    deletes.onclick = deleteAll;

    for (var i = 0; i < squareCount; i++) {
        var squareCount = parseInt(Math.random() * 21) + 30;
        for (var i = 0; i < squareCount; i++) {
            addSquare();
            changeColors();
        }
    }
};

// generate and return a random color string such as "#f08a7c"
function getRandomColor() {
    var x = "0123456789abcdef";
    var result = "#";
    for (var i = 0; i < 6; i++)
        result += x.charAt(parseInt(Math.random() * x.length));
    return result;
}

function changeColors() {
    var squareArea = document.getElementById("squarearea");
    var squares = squareArea.getElementsByTagName("div");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = getRandomColor();
    }
}

// creates and adds a new square div
function addSquare() {
    var square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    var squareArea = document.getElementById("squarearea");
    squareArea.appendChild(square);
}

function deleteAll() {
    var squareArea = document.getElementById("squarearea");
    squareArea.innerHTML = "";
}