/* Exercício Aula 01

alert("Boas vindas ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
//alert("Boas-vindas ao jogo do número secreto!");
alert("Erro! Preencha todos os campos");
nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
} 

*/

let numeroSecreto = 2;
console.log("Número secreto: " + numeroSecreto);

let chute = prompt("Escolha um número entre 1 e 10");
console.log("Chute: " + chute);

if (chute == numeroSecreto) {
  alert(`É isso aí! Você acertou o número secreto ${numeroSecreto}`);
  console.log("Acertou!");
} else {
  alert("Você errou :(");
  console.log("Errou!");
}
