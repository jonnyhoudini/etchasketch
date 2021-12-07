
// Define container
const container = document.querySelector(".container");

function createGrid(size) {
  for (i = 0; i < (size ** 2); i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
    container.appendChild(item);
  }
}

createGrid(16);

// Define clear button
const btn = document.querySelector(".btncontainer");

// Clear the grid

btn.addEventListener("click", clearGrid);

function clearGrid() {
  let size = prompt("How big do you want your grid to be (1-100)");
  if (size > 100 || size < 1) {
    size = prompt("How big do you want your grid to be (1-100)");
  };
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 10px)`;
  container.style.gridTemplateRows = `repeat(${size}, 10px)`;
  createGrid(size);

}



// Ask for new size and save it as a variable
