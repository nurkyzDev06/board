const board = document.querySelector("#board");
const squareNumber= 500;
const colors = ["red", "green", "blue","white", "grey","pink","yellow","purple","aqua","orange","lilac","scarlet"];
const addBtn =document.querySelector(".add-btn")
const deleteBtn = document.querySelector(".delete-btn")

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover",() => {
        setColor(square)
    })
addBtn.addEventListener("click",() => {
    setColor(square)
})
    square.addEventListener("mouseleave",() => {
        removeColor(square)
    })
    deleteBtn.addEventListener("click",() => {
        removeColor(square)
    })
    board.append(square)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]

}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgraundColor = color
    square.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgraundColor = `#1d1d1d`
    square.style.boxShadow = `0 0 2px #000`
}




