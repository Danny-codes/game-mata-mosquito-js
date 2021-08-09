var altura= 0
var largura = 0

function ajustaTamanhoJogo(){
    altura = window.innerHeight
    largura =  window.innerWidth
}
ajustaTamanhoJogo()

function posicaoRandomica(){
    var posicaox = Math.floor(Math.random() * largura) -90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox + posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy + posicaoy < 0 ? 0 : posicaoy

    //criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
