const container = document.querySelector(".container");
let boardSize = 20;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let pixels = document.querySelectorAll(".container div");
    pixels.forEach((pixel) => {
        pixel.remove();
    })
    drawBoard(boardSize);
    changeColor();
});

const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", () => {
    let pixels = document.querySelectorAll(".container div");
    pixels.forEach((pixel) => {
        pixel.remove();
    }); //make this a function (removeBoard())
    do {
        boardSize = prompt("Enter a number between 1-100");
    } while (boardSize > 100 || boardSize < 1);

    drawBoard(boardSize);
    changeColor();
    
});

drawBoard(boardSize);
changeColor();

function drawBoard(gridSize) {
    let size = gridSize * gridSize;
    let pixelSize = 800 / gridSize;
    do {
        const pixels = document.createElement("div");
        pixels.style.width = `${pixelSize.toString()}px`;
        pixels.style.height = `${pixelSize.toString()}px`;
        container.appendChild(pixels);
        size--;
    } while (size != 0);
}

function changeColor() {
    const pixels = document.querySelectorAll(".container div");
    pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = "black";
    });
});
}


/*
hi all, I want to know why this altering CSS method doesn't work :
```css

```


but this works:
```css

```

I'm working on etch a sketch, above code are to achieve:
1. set div into correct width & height
2. set the hovered div to a certain color

I just want to know if someone understand the difference between 
*selector.*style.*css-property* = *css-value* ;
VS 
*selector.*style.cssText = "*css-property: css-value*";
*/