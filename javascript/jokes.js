const jokeEL = document.getElementById('joke')
const JokeBTN = document.getElementById('JokeBTN')

(generateJoke)
JokeBTN.addEventListener('click', generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokeEL.innerHTML = data.joke
}