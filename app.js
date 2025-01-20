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
  }
  input.focus()
}