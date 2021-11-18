const container = document.querySelector(".container");

function createGrid() {
  let i = 0;
  while (i < 256) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
    container.appendChild(item);
    i++;
  }

}

createGrid();
