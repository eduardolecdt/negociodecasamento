(function (){

  // Variables
  const __slide = document.querySelector('section[name="depoimentos"]')
  const itensSlide = __slide.querySelector('div[name="slide_depoimentos"]')
  const imagemAvancar = __slide.querySelector('img[name="avancar"]')
  const imagemVoltar = __slide.querySelector('img[name="voltar"]')
  const __tamanhoElemento = 350
  let __indice = 1

  function botaoAvancarSlide () {
    imagemAvancar.addEventListener('click', () => {
      const numeroLinks = itensSlide.children.length
      if (verificaRolagemMaxima(__indice)) return
      if (__indice === numeroLinks) return

      __indice = __indice + 1
      rolarSlide(__indice)
    })
  }

  function botaoVoltarSlide () {
    imagemVoltar.addEventListener('click', () => {
      if (__indice === 1) return

      __indice = __indice - 1
      rolarSlide(__indice)
    })
  }

  // Auxiliares

  function rolarSlide (indice) {
    const deslocamento = __tamanhoElemento * (indice - 1)
    itensSlide.style.transform = `translateX(-${deslocamento}px)`
  }

  function verificaRolagemMaxima (indice) {
    const larguraSlide = __slide.clientWidth
    const larguraMaximaSlide = itensSlide.clientWidth
    const larguraMaximaRolagemPermitida = larguraMaximaSlide - larguraSlide

    const deslocamento = __tamanhoElemento * (indice - 1)
    if (deslocamento >= larguraMaximaRolagemPermitida) return true
    return false
  }

  // iniciar
  botaoAvancarSlide()
  botaoVoltarSlide()

}())
