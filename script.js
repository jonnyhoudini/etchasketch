
// Define container
const container = document.querySelector(".container");

function createGrid(size) {

  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < (size ** 2); i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
    container.appendChild(item);
  }
}

// Create the initial 16x16 grid
createGrid(16);

// Define clear button
const btn = document.querySelector(".btncontainer");

// Clear the grid and create a new one based on user input

btn.addEventListener("click", clearGrid);

function clearGrid() {
  let size = prompt("How big do you want your grid to be (1-100)");
  if (size >= 1 && size <= 100) {
    createGrid(size);
  } else alert("You must enter a number within the range 1 - 100.");



}
