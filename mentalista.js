var numeroSecreto = parseInt(Math.random() * 10 + 1)
var tentativas = 3

function game() {
  var chute = document.getElementById("resposta").value
  
  while (tentativas > 0) {  
      if (chute == numeroSecreto) {
        resultado.innerHTML = "Parabéns, você acertou!";
        break;
      } else if (chute > numeroSecreto) {
        resultado.innerHTML = "O número secreto é menor.";
        tentativas = tentativas - 1;
        break;
      } else if (chute < numeroSecreto) {
        resultado.innerHTML = "O número secreto é maior.";
        tentativas = tentativas - 1;
        break;
      }
    }

    if (tentativas == 0) {
      resultado.innerHTML = "Não foi dessa vez, o número secreto era " + numeroSecreto + ".";
    }
}


