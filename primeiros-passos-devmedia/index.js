/*
var nomes = ['Alan', 'Raiane', 'Miranda', 1, {not:'nao'}]

var pessoa = {
    nome: 'Alan',
    idade: 27
}


var peso = 99
var altura = 1.75
var imc = peso / (altura * altura)

console.log(pessoa)
console.log(pessoa.idade)
console.log(imc)

*/


/* 6
var comprarRefrigerante = false
var comprarCerveja = false
var comprarSucoNatural = false

var convidado = {
    nome: 'Pedro',
    idade: 18,
    bebeRefrigerante: false,
    bebeCerveja: false,
    bebeSucoNatural: true
}

if(convidado.bebeRefrigerante) {
    comprarRefrigerante = true
} else 
if(convidado.bebeCerveja && convidado.idade >= 18){
    comprarCerveja = true
} else {
    comprarSucoNatural = true
}

console.log('comprarRefrigerante:', comprarRefrigerante)
console.log('comprarCerveja:', comprarCerveja)
console.log('comprarSucoNatural:', comprarSucoNatural)
*/


/* 7 e 8

var comprarCerveja = false
var comprarRefrigerante = false
var comprarSucoNatural = false

var convidados = [
    {
        nome: 'Pedro',
        idade: 18,
        bebeCerveja: true,
        bebeRefrigerante: false,
        bebeSucoNatural: false
    },
    {
        nome: 'Alan',
        idade: 27,
        bebeCerveja: false,
        bebeRefrigerante: true,
        bebeSucoNatural: false
    },
    {
        nome: 'Raiane',
        idade: 22,
        bebeCerveja: false,
        bebeRefrigerante: true,
        bebeSucoNatural: false
    }
]

for (let i = 0; i < convidados.length; i++) {
    console.log('loop for')
    const element = convidados[i];

    if (!comprarRefrigerante && element.bebeRefrigerante) {
        comprarRefrigerante = true
    } else if (!comprarCerveja && element.bebeCerveja && element.idade >= 18) {
        comprarCerveja = true    
    } else if (!comprarSucoNatural && element.bebeSucoNatural) {
        comprarSucoNatural = true
    }
}

var i = 0
while (i < convidados.length) {
    console.log('loop while')
    if (!comprarRefrigerante && convidados[i].bebeRefrigerante) {
        comprarRefrigerante = true
    } else if (!comprarCerveja && convidados[i].bebeCerveja && convidados[i].idade >= 18) {
        comprarCerveja = true
    } else if (!comprarSucoNatural && convidados[i].bebeSucoNatural) {
        comprarSucoNatural = true
    }
       
    i++
}

console.log('comprarRefrigerante:', comprarRefrigerante)
console.log('comprarCerveja:', comprarCerveja)
console.log('comprarSucoNatural:', comprarSucoNatural)

* /

/* 9 */

function imc (altura, peso) {    
    return peso / (altura * altura)
}

var pessoas = [
    {
        nome: 'Pedro',
        altura: 1.80,
        peso: 80
    },
    {
        nome: 'Alan',
        altura: 1.75,
        peso: 99
    },
    {
        nome: 'Raiane',
        altura: 1.60,
        peso: 47
    }
]

for (var pessoa of pessoas) {
    var resultado = imc(pessoa.altura, pessoa.peso)
    console.log(pessoa.nome, resultado)
}
