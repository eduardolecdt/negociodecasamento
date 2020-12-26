(function (){

  // Ativar Lazy Loading

  function ativarLazyLoading () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY + window.innerHeight + 500
      const imagens = document.querySelectorAll('img[data-src]')

      for (const imagem of imagens) {
        if (alturaPagina <= imagem.offsetTop) return

        const src = imagem.getAttribute('data-src')
        imagem.src = src
        imagem.removeAttribute('data-src')
      }
    })
  }

  // Button data-url

  function toExternalPage (url) {
    if (!url) return

    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_blank'
    a.href = url
    a.click()
  }

  function habilitarCliqueBotaoComDataUrl () {
    window.addEventListener('click', (evento) => {
      if (evento.target.nodeName !== 'BUTTON') return

      const url = evento.target.getAttribute('data-url')
      if (!url) return

      toExternalPage(url)
    })
  }

  // Bloquear Drag Drop

  function bloquearDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  // Start

  ativarLazyLoading()
  bloquearDragDrop()
  habilitarCliqueBotaoComDataUrl()

}())
