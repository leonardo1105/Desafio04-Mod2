function mensagem(){
    console.log('Olá, isto é uma mensagem')
}
mensagem()

function nome(name){
    return name
}
console.log(nome('Leonardo'))

function dados(nome,idade,estiloMusical){
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos,e gosto de ${estiloMusical}`)
}
dados('Leo',20,'Rock')

function filmeMusica(filme,musica){
    console.log(filme,musica)
}
filmeMusica('007-Sem tempo para morrer','No time to die - Billie Eilish')

// BONUS

function triplo(num){
    return num*3
}

console.log(triplo(5))