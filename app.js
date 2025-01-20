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

function atualizarLista() {
  nomeLista.innerHTML = null

  for(nome of amigos) {
    const li = document.createElement("li")
    li.textContent = nome
    nomeLista.appendChild(li)
  }
}