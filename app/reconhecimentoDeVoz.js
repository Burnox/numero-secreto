const elementoChute = document.querySelector('#chute')
const microfone = document.querySelector('#microfone')

microfone.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)()
  recognition.lang = 'pt-BR'

  recognition.start()
  recognition.addEventListener('result', onSpeak)

  //Encerra automáticamente a captura de áudio após um periodo de 5 segundos
  setTimeout(() => recognition.stop(), 3000)
})

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
