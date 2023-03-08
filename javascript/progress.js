.const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = documenr.querySelectorAll('.circle')

let currentActive = 1


next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }

    update()
})

prev.addEventListener('click', () => {
    curentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    progress.style.width  = (currentActive - 1 / 3) + '%'}`
}