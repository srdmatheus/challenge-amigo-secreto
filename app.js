const amigos = []

const input = document.querySelector("input")
const nomeLista = document.querySelector(".name-list")
const resultadoLista = document.querySelector(".result-list")

function adicionarAmigo() {
  const nome = input.value.trim()
  if(nome === "") {
    return alert("Por favor, insira um nome.")
  } else {
    amigos.push(nome)
    input.value = ""
    atualizarLista()
  }
  input.focus()
}

function createLi(nome) {
  const li = document.createElement("li")
  li.textContent = nome
  return li
}

function atualizarLista() {
  nomeLista.innerHTML = null

  for(nome of amigos) {
    const amigoItem = createLi(nome)
    nomeLista.appendChild(amigoItem)
  }
}

function sortearAmigo() {
  if(amigos.length === 0) {
    return alert("Lista vazia.")
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[indiceAleatorio]
  const amigoSorteadoItem = createLi(amigoSorteado)

  resultadoLista.innerHTML = null
  resultadoLista.appendChild(amigoSorteadoItem)
}