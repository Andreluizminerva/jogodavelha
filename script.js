var jogador = null;
defineJogador();  // define aleatóriamente qual o jogador a iniciar o jogo


function jogar(objBot) {
  
  objBot.value = jogador;
  objBot.disabled = true;

  if( verificaVitoria() == true) {
    desativarBotoes(true); // desativa todos os restanntes botões
    document.querySelector("footer").querySelector("span").innerHTML = "O Jogador: " +  jogador + " ganhou!";
  }
  else if( verificaEmpate() == true) {
    document.querySelector("footer").querySelector("span").innerHTML = "Empate no jogo!";
  }
  else {
    jogador = jogador == "X" ? "O" : "X"
    document.querySelector("footer").querySelector("span").innerHTML = "Jogador: " +  jogador;
  }
}

// restabelece o estado do programa, para inciar o jogo
// limpar os botões, ativar os botões, definir o jogador, informar o jogadora 
function reiniciar() {
  limparBotoes(" ");
  desativarBotoes(false); // ativar os boões todos
  defineJogador();

  document.querySelector("fieldset").style = "border-radius: 10px 10px 0 0";
  document.querySelector("footer").style = "display:block";
  document.querySelector("footer").querySelector("span").innerHTML = "Jogador: " +  jogador;
}

// ativa (estado == false) e desativa (estado == true) os botões
function desativarBotoes(estado) { // estado==true desativa; estado==false ativa
  document.getElementById("b11").disabled = estado;
  document.getElementById("b12").disabled = estado;
  document.getElementById("b13").disabled = estado;
  document.getElementById("b21").disabled = estado;
  document.getElementById("b22").disabled = estado;
  document.getElementById("b23").disabled = estado;
  document.getElementById("b31").disabled = estado;
  document.getElementById("b32").disabled = estado;
  document.getElementById("b33").disabled = estado;
}

function limparBotoes(texto) {
  var idBot;
  for(var lin=1; lin <=3; lin++) {
    for(var col=1; col<=3; col++) {
      idBot = "b" + lin + col;
      document.getElementById(idBot).value = texto;
    }
  }
}

function defineJogador() {
  if(jogador == null) {
    jogador = 1+Math.floor(Math.random()*2) == 1 ?  "X" : "O";
  } 
  else {
      jogador = jogador == "X" ? "O" : "X";
  }
 }


function verificaVitoria() {
  var b11, b12, b13, b21, b22, b23, b31, b32, b33;

  b11 = document.getElementById("b11").value;
  b12 = document.getElementById("b12").value;
  b13 = document.getElementById("b13").value;
  b21 = document.getElementById("b21").value;
  b22 = document.getElementById("b22").value;
  b23 = document.getElementById("b23").value;
  b31 = document.getElementById("b31").value;
  b32 = document.getElementById("b32").value;
  b33 = document.getElementById("b33").value;

  // b11  b12  b13
  // b21  b22  b23
  // b31  b32  b33

  if( b11==jogador && b11==b12 && b11==b13   ||
      b21==jogador && b21==b22 && b21==b23   ||
      b31==jogador && b31==b32 && b31==b33   ||

      b11==jogador && b11==b21 && b11==b31   ||
      b12==jogador && b12==b22 && b12==b32   ||
      b13==jogador && b13==b23 && b13==b33   ||

      b11==jogador && b11==b22 && b11==b33   ||
      b31==jogador && b31==b22 && b31==b13       ) {

      return true;  // há vitória
  }
  else {
    false; // não há vitória
  }
}

function verificaEmpate() {
   var idBot;
  for(var lin=1; lin <=3; lin++) {
    for(var col=1; col<=3; col++) {
      idBot = "b" + lin + col;
      if (document.getElementById(idBot).value == " ") {
        return false  // este botão anda não foi jogado ... logo não há empate
      }
    }
  }

  return true; // todos os botões foram jogados ... logo há empate
}
