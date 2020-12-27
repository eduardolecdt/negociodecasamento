(function (){

  // Variables
  const __section = document.querySelector('section[name="depoimentos"]')
  const __divItens = __section.querySelector('div[name="slide_depoimentos"]')
  const __buttonAvancar = __section.querySelector('img[name="avancar"]')
  const __buttonVoltar = __section.querySelector('img[name="voltar"]')
  let __indice = 1

  function botaoAvancarSlide () {
    __buttonAvancar.addEventListener('click', () => {
      const numeroLinks = __divItens.children.length

      if (__indice === numeroLinks) return
      __indice++

      const porcentagem = 330 * (__indice - 1)
      __divItens.style.transform = `translateX(-${porcentagem}px)`
    })
  }

  function botaoVoltarSlide () {
    __buttonVoltar.addEventListener('click', () => {

      if (__indice === 1) return
      __indice--

      const porcentagem = 330 * (__indice - 1)
      __divItens.style.transform = `translateX(-${porcentagem}px)`
    })
  }

  // Start

  botaoAvancarSlide()
  botaoVoltarSlide()

}())
