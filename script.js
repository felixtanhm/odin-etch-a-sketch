const defaultGrid = 16;

let gridSize = defaultGrid;
let mouseDown = false;
let gridContainer = document.querySelector("#grid");
document.body.onmousedown = (e) => {
  e.preventDefault();
  mouseDown = true;
};
document.body.onmouseup = (e) => {
  e.preventDefault();
  mouseDown = false;
};

const generateGrid = (size) => {
  console.log(`Grid size is: ${size}`);
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

window.onload = () => {
  generateGrid(gridSize);
};
