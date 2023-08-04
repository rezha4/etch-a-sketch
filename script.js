const container = document.querySelector(".container");

let size = 16*16;

console.log(size);

do {
    const pixels = document.createElement("div");
    container.appendChild(pixels);
    console.log("tes");
    size--;
} while (size != 0);