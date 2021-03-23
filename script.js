document.getElementById("botaoEnviar").addEventListener("click",
  verificaBotao )

function verificaBotao (){

    if (document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("fone").value ){
      alert("Cadastrado com sucesso na newsletter")
  }else{
      alert("Faltou preencher algum campo!")
  }
}

