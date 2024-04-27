// Exercício Aula 02-09-3

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let scoreUser = prompt("Qual foi sua pontuação?:");
console.log("Número digitado: " + scoreUser);

if (scoreUser > 100) {
  alert("Parabéns, você venceu!");
  console.log("Venceu");
} else {
  alert("Tente novamente para ganhar");
  console.log("Tente novamente");
}
