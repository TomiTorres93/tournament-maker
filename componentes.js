const octavosuno = document.getElementById('octavosuno')
const octavosdos = document.getElementById('octavosdos')
const octavostres = document.getElementById('octavostres')
const octavoscuatro = document.getElementById('octavoscuatro')
const octavoscinco = document.getElementById('octavoscinco')
const octavosseis = document.getElementById('octavosseis')
const octavossiete = document.getElementById('octavossiete')
const octavosocho = document.getElementById('octavosocho')

const cuartosuno = document.getElementById('cuartosuno')
const cuartosdos = document.getElementById('cuartosdos')
const cuartostres = document.getElementById('cuartostres')
const cuartoscuatro = document.getElementById('cuartoscuatro')
const semisuno = document.getElementById('semisuno')
const semisdos = document.getElementById('semisdos')
const final = document.getElementById('final')

function cruces (a, b, c) {
    a.innerHTML = (
        `
        <div class="jugador-cont">
        <p class="cuadro" id="${b}"></p>
        <input class="resultado" type="number" placeholder="0">   
        </div>

        <div class="jugador-cont">
        <p class="cuadro" id="${c}"></p>
        <input class="resultado" type="number" placeholder="0">   
        </div>
        `
    )  
}

let octavoscruce1 = cruces(octavosuno, "joctavosuno", "joctavosdos")
let octavoscruce2 = cruces(octavosdos, "joctavostres", "joctavoscuatro")
let octavoscruce3 = cruces(octavostres, "joctavoscinco", "joctavosseis")
let octavoscruce4 = cruces(octavoscuatro, "joctavossiete", "joctavosocho")
let octavoscruce5 = cruces(octavoscinco, "joctavosnueve", "joctavosdiez")
let octavoscruce6 = cruces(octavosseis, "joctavosonce", "joctavosdoce")
let octavoscruce7 = cruces(octavossiete, "joctavostrece", "joctavoscatorce")
let octavoscruce8 = cruces(octavosocho, "joctavosquince", "dieciseis")

let cuartoscruce1 = cruces(cuartosuno, "juno", "jdos")
let cuartoscruce2 = cruces(cuartosdos, "jtres", "jcuatro")
let cuartoscruce3 = cruces(cuartostres, "jcinco", "jseis")
let cuartoscruce4 = cruces(cuartoscuatro, "jsiete", "jocho")
let semiscruce1 = cruces(semisuno, "jcuartosuno", "jcuartosdos")
let semiscruce2 = cruces(semisdos, "jcuartostres", "jcuartoscuatro")
let finalcruce = cruces(final, "jsemisuno", "jsemisdos")
