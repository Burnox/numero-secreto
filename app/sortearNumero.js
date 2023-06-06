const menorValor = 1
const spanMenorValor = document.querySelector('#menor-valor')
spanMenorValor.innerHTML = menorValor

const maiorValor = 1000
const spanMaiorValor = document.querySelector('#maior-valor')
spanMaiorValor.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroSecreto)
