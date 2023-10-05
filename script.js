const defaultGrid = 16;

let gridSize = defaultGrid;
let gridContainer = document.querySelector("#grid");
let gameMode = "default";

let mouseDown = false;
document.body.onmousedown = (e) => {
  e.preventDefault();
  mouseDown = true;
};
document.body.onmouseup = (e) => {
  e.preventDefault();
  mouseDown = false;
};

const generateGrid = (size) => {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let singleGrid = document.createElement("div");
    singleGrid.classList.add("grid-element");
    singleGrid.addEventListener("mouseover", colorGrid);
    singleGrid.addEventListener("mousedown", colorGrid);
    gridContainer.appendChild(singleGrid);
  }
};

const colorGrid = (event) => {
  if (event.type === "mouseover" && !mouseDown) return;
  event.target.style.backgroundColor = "#000";
};

const clearGrid = () => {
  gridContainer.textContent = "";
  generateGrid(gridSize);
};

const handleClick = (e) => {
  let button = e.target.textContent.toLowerCase();
  if (button === "clear") {
    clearGrid();
  } else if (button === "default") {
  } else if (button === "rainbow") {
  }
};

document.querySelectorAll("#selection > button").forEach((button) => {
  button.addEventListener("click", handleClick);
});

window.onload = () => {
  generateGrid(gridSize);
};
