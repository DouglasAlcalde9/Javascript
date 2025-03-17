// var agora = new Date ()
// var hora = agora.getHours() para pegar a hr do sistema

var hora = 4

console.log(`Agora são extamente ${hora} horas.`)

if ( hora < 12 || hora > 5) {
    console.log('Bom dia !')
}

else if (hora <= 18) {
    console.log('Boa Tarde')
}

else if (hora > 24 || hora <= 5) {
    console.log('Boa Madrugada')
}

else {
    console.log('Boa noite ')
}