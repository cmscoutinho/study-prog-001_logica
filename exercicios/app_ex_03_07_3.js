// Exercício Aula 03-07-3

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador = prompt("Digite o valor inicial do contador:");
while (contador >= 0) {
  console.log(`Contador: ${contador}.`);
  contador--;
}
