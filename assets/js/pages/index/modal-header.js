(function (){

  // Variables

  const __header = document.querySelector('header')
  const __body = document.querySelector('body')
  const __modal = __header.querySelector('div[name="modal"]')
  const iframeModal = __modal.querySelector('iframe[name="video"]')
  const botaoFecharModal = __modal.querySelector('p[name="fechar"]')

  // Abrir Modal

  function habilitarCliqueBotaoAbrirModal () {
    const elemento = 'img[name="abrir_video"]'
    __header.addEventListener('click', (evento) => {
      if (!evento.target.matches(elemento)) return

      const inputUrl = __header.querySelector('input[name="url_video"]')
      const url = inputUrl.value
      const dados = { url }

      iframeModal.src = dados.url
      __modal.classList.add('mostrar')
      __body.classList.add('bloqueado')
    })
  }

  // Fechar Modal

  function habilitarCliqueBotaoFecharModal () {
    botaoFecharModal.addEventListener('click', () => {
      iframeModal.src = ''
      __modal.classList.remove('mostrar')
      __body.classList.remove('bloqueado')
    })
  }

  // Start

  habilitarCliqueBotaoAbrirModal()
  habilitarCliqueBotaoFecharModal()

}())
