const jokeEL = document.getElementById('joke')
const jokeBTN = document.getElementById('JokeBTN')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokeEL.innerHTML = data.joke
}