function verificaChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    if (chute === 'game over') {
      document.body.innerHTML = `
                                <h1> GAME OVER!</h1>
                                <button id='restart' class='btn-restart'>RESTART</button>
                              `
      document.body.style.backgroundColor = 'red'
    } else {
      elementoChute.innerHTML +=
        '<div class="dica">ATENÇÃO: Você não falou um número!</div>'
      return
    }
  }

  if (numeroForaDoRange(numero)) {
    elementoChute.innerHTML +=
      '<div class="dica">ATENÇÃO: O número deve estar dentro do limite!</div>'
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h1> PARABÉNS!!!</h1>
                               <h2> O número secreto era ${numeroSecreto}! </h2>

                               <button id='restart' class='btn-restart'>RESTART</button>
                              `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML +=
      '<div class="dica">Dica 02: Tente um número mais baixo. <i class="fa-solid fa-arrow-down"></i></div>'
  } else {
    elementoChute.innerHTML +=
      '<div class="dica">Dica 02: Tente um número mais alto. <i class="fa-solid fa-arrow-up"></i></div>'
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForaDoRange(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
  if (evento.target.id === 'restart') {
    window.location.reload()
  }
})
