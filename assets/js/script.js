/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = window.document.querySelector("#email");
let assunto = window.document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome Inválido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "VALIDO demais, é O Senhor Incrivel";
    txt.style.color = "green";
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail TOP!! vou encher de SPAM";
    txtEmail.style.color = "green";
    emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Texto muito grande, digite no maximo 100 caacteres.";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block"
  } else {
      txtAssunto.style.display = "none"
      assuntoOk = true
  }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso!!')
    } else {
        alert ('Preencha todos os campos corretamente antes de enviar!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function normal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
