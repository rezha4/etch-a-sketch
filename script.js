const container = document.querySelector(".container");
let i = 16;
let size = i*i;

console.log(size);

do {
    const pixels = document.createElement("div");
    container.appendChild(pixels);
    console.log("tes");
    size--;
} while (size != 0);

const pixels = document.querySelectorAll(".container div");
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.cssText = "background-color: black;";
    });
});