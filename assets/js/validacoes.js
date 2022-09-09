function verificaChute() {
    const numero = parseInt(chute)

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <button class="botao-jogar" type="button" onClick="jogarNovamente()">JOGAR NOVAMENTE</button>
            `
            document.body.style.backgroundColor = "black";
        } else if (chute === "Fran") {
            document.body.innerHTML = `
                <h1>É o amor da minha vida!</h1>
                <button class="botao-jogar" type="button" onClick="jogarNovamente()">JOGAR NOVAMENTE</button>
            `
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return
    }

    if (numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += (`<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`)
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button class="botao-jogar" type="button" onClick="jogarNovamente()">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function jogarNovamente(){
    window.location.reload();
} 