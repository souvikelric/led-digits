class GridSquares {
  constructor(wrapper, numSquares) {
    this.wrapper = wrapper;
    this.container = document.createElement("div");
    this.container.classList.add("grid-container");
    this.wrapper.appendChild(this.container);
    this.squares = [];
    for (let i = 0; i < numSquares; i++) {
      const sqElem = document.createElement("div");
      sqElem.classList.add("grid-square");
      this.container.appendChild(sqElem);
      this.squares.push(sqElem);
    }
  }
}
