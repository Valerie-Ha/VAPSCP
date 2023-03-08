const bg = document.querySelector(".bg")
const number = document.querySelector(".loading-text")

let i = 0
let not_var = setInterval(loading, 50)

function loading() {
    i++
    number.style.opacity = `${1-i/100}`
    bg.style.filter = `blur(${30-0.3*i}px)`
    number.innerText = `${i}%`
    if(i == 100) {
        clearInterval(not_var)
    }

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }

    })
}


