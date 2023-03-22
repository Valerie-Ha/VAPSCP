const container = document.getElementById('container')
const colors = ['#eddd00', '#00d1ed', '#e3197b', '#ff9c08', '#0862ff' ]
const SQUARES = 500

for(let i = 0; 1 < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListerner('mouseover', () => setcolor(square))
}

function setColor(element) {
    const color = getRandomColor()
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*5)]
}