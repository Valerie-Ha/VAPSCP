const container = document.getElementById('container')
const colors = ['#eddd00', '#00d1ed', '#e3197b', '#ff9c08', '#0862ff', '#eb0729' ]
const SQUARES = 1000

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}