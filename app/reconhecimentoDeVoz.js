const elementoChute = document.querySelector('#chute')

//Assim que a página carregar a configuração de voz já estará ativa
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

//Instanciado o reconhecimento de voz
const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'
recognition.start()

//Evento que exibe a mensagem assim que for detectado uma fala
recognition.addEventListener('result', onSpeak)

function onSpeak(fala) {
  //Dentro da variável results, existe um array 0, dentro dele outro array 0, por fim uma variável transcript onde está o resultado da fala.
  const chute = fala.results[0][0].transcript
  exibeChute(chute)
  // Verifica se o chute é um valor válido, ou seja, um número inteiro dentro do intervalo
  verificaChute(chute)
}

function exibeChute(chute) {
  elementoChute.innerHTML = `
        <div>Seu palpite:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
