function rollDice(imgId) {
  // Gerando um número aleatório entre 1 e 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // Alterando a imagem de acordo com o número aleatório
  imgId.src = `images/dice${randomNumber}.png`;
  return randomNumber;
}

// Função para mostrar a mensagem de vencedor
function showWinner(player1Score, player2Score) {
  const elementResultado = document.getElementById("idResultado");

  
  if (player1Score == player2Score) {
    elementResultado.innerHTML = "Empate !";
    return;
  }
  const message =
    player1Score > player2Score ? "Jogador 1 venceu!" : "Jogador 2 venceu!";


  // Inserindo a frase no elemento
  elementResultado.innerHTML = message;
}

// Função para jogar o jogo
function playGame() {
  // Jogador 1 rola o dado
  const player1Score = rollDice(img1);

  // Jogador 2 rola o dado
  const player2Score = rollDice(img2);

  showWinner(player1Score, player2Score);
}
