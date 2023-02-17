let box = document.getElementById("box");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

box.addEventListener("mouseover", () => {
    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    box.style.transform = `translate(${randX}px, ${randY}px)`;
});