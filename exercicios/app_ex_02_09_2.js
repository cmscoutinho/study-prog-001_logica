// Exercício Aula 02-09-2

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numUser = prompt("Digite um número qualquer:");
console.log("Número digitado: " + numUser);

if (numUser > 0) {
  alert("O número é positivo!");
  console.log("Positivo");
} else if (numUser < 0) {
  alert("O número é negativo!");
  console.log("Negativo");
}
