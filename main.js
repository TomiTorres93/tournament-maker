////

const form = document.getElementById('form')
const agregarnombre = document.getElementById('agregarnombre')
const sortear = document.getElementById('sortear')
const listado = document.getElementById('listado')
const jugadoringresado = document.getElementById('jugadoringresado')
const enfrentamientos = document.getElementById('enfrentamientos')

let jugadores = []

let octavos = []


form.addEventListener("submit", function(e) {
    e.preventDefault();

    let formValues = new FormData(e.target);

    let jugador = jugadoringresado.value

    form.reset();

    console.log(jugador)

    sessionStorage.setItem("jugadoringresado", JSON.stringify(jugador));

    jugadores.push(jugador); 



$("#listado").append( `

<p class="white jugadorlistado">${jugador}</p>
`)    


sessionStorage.setItem("jugadores", JSON.stringify(jugadores))
 
sessionStorage.setItem("listado", JSON.stringify($("#listado").html()))

//  JSON.stringify($("#listado").html()));

console.log(jugadores)

});





sortear.addEventListener("click", function() {  

    sorteo = jugadores.sort(function() { return Math.random() - 0.5 })
    

    console.log(sorteo)
    console.log(jugadores.length)
    if (jugadores.length <= 8) {

    $("#juno").empty().append( `${jugadores[0]}`)    

    $("#jdos").empty().append( `${jugadores[1]}`)    

    $("#jtres").empty().append( `${jugadores[2]}`)    
    
    $("#jcuatro").empty().append( `${jugadores[3]}`)   

    $("#jcinco").empty().append( `${jugadores[4]}`)   

    $("#jseis").empty().append( `${jugadores[5]}`)   

    $("#jsiete").empty().append( `${jugadores[6]}`)   

    $("#jocho").empty().append( `${jugadores[7]}`)

} if (jugadores.length > 8) {

$("#joctavosuno").empty().append( `${jugadores[0]}`)    

$("#joctavosdos").empty().append( `${jugadores[1]}`)    

$("#joctavostres").empty().append( `${jugadores[2]}`)    

$("#joctavoscuatro").empty().append( `${jugadores[3]}`)   

$("#joctavoscinco").empty().append( `${jugadores[4]}`)   

$("#joctavosseis").empty().append( `${jugadores[5]}`)   

$("#joctavossiete").empty().append( `${jugadores[6]}`)   

$("#joctavosocho").empty().append( `${jugadores[7]}`)  

$("#joctavosnueve").empty().append( `${jugadores[8]}`)    

$("#joctavosdiez").empty().append( `${jugadores[9]}`)    

$("#joctavosonce").empty().append( `${jugadores[10]}`)    

$("#joctavosdoce").empty().append( `${jugadores[11]}`)   

$("#joctavostrece").empty().append( `${jugadores[12]}`)   

$("#joctavoscatorce").empty().append( `${jugadores[13]}`)   

$("#joctavosquince").empty().append( `${jugadores[14]}`)   

$("#joctavosdieciseis").empty().append( `${jugadores[15]}`)  

}


if (jugadores.length <= 8) {
    playoctavos.classList.add('hide')
}

})


////////////PASAR DE RONDA///////////

const juno = document.getElementById('juno')
const jdos = document.getElementById('jdos')
const jtres = document.getElementById('jtres')
const jcuatro = document.getElementById('jcuatro')
const jcinco = document.getElementById('jcinco')
const jseis = document.getElementById('jseis')
const jsiete = document.getElementById('jsiete')
const jocho = document.getElementById('jocho')

const jcuartosuno = document.getElementById('jcuartosuno')
const jcuartosdos = document.getElementById('jcuartosdos')
const jcuartostres = document.getElementById('jcuartostres')
const jcuartoscuatro = document.getElementById('jcuartoscuatro')

const jsemisuno = document.getElementById('jsemisuno')
const jsemisdos = document.getElementById('jsemisdos')
const jcampeon = document.getElementById('jcampeon')

function pasarderonda (a, b) {
    a.addEventListener("click", function() {  
   
        b.innerHTML = a.innerHTML    
    })

  
}


let pasaroctavos1 = pasarderonda(juno, jcuartosuno)
let pasaroctavos2 = pasarderonda(jdos, jcuartosuno)
let pasaroctavos3 = pasarderonda(jtres, jcuartosdos)
let pasaroctavos4 = pasarderonda(jcuatro, jcuartosdos)
let pasaroctavos5 = pasarderonda(jcinco, jcuartostres)
let pasaroctavos6 = pasarderonda(jseis, jcuartostres)
let pasaroctavos7 = pasarderonda(jsiete, jcuartoscuatro)
let pasaroctavos8 = pasarderonda(jocho, jcuartoscuatro)

let pasarcuartos1 = pasarderonda(jcuartosuno, jsemisuno)
let pasarcuartos2 = pasarderonda(jcuartosdos, jsemisuno)
let pasarcuartos3 = pasarderonda(jcuartostres, jsemisdos)
let pasarcuartos4 = pasarderonda(jcuartoscuatro, jsemisdos)

let finalista1 = pasarderonda(jsemisuno, jcampeon)
let finalista2 = pasarderonda(jsemisdos, jcampeon)

// let pasarcuartos1 = pasarderonda(jocho, jcuartoscuatro)




////////// MOSTRAR LAS ETAPAS
const playoctavos = document.getElementById('playoctavos')
const playcuartos = document.getElementById('playcuartos')
const playsemis = document.getElementById('playsemis')
const playfinal = document.getElementById('playfinal')

const showoctavos = document.getElementById('showoctavos')
const showcuartos = document.getElementById('showcuartos')
const showsemis = document.getElementById('showsemis')
const showfinal = document.getElementById('showfinal')
const showgeneral = document.getElementById('showgeneral')


function mostrarllaves (a, b, c, d, e) {
    a.addEventListener("click", function() {  
   
        b.classList.remove('hide')
        c.classList.add('hide')
        d.classList.add('hide')
        e.classList.add('hide')

    })
}

showgeneral.addEventListener("click", function() {  
   
    playoctavos.classList.remove('hide')
    playcuartos.classList.remove('hide')
    playsemis.classList.remove('hide')
    playfinal.classList.remove('hide')

})

let mostraroctavos = mostrarllaves(showoctavos, playoctavos, playcuartos, playsemis, playfinal)

let mostrarcuartos = mostrarllaves(showcuartos, playcuartos, playoctavos, playsemis, playfinal)

let mostrarsemis = mostrarllaves(showsemis, playsemis, playcuartos, playoctavos,  playfinal)

let mostrarfinal = mostrarllaves(showfinal, playfinal, playcuartos, playoctavos, playsemis)