// Exercício Aula 03-07-4

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite o valor final do contador:");
let contador = 0;

while (contador <= numero) {
  console.log(`Contador: ${contador}.`);
  contador++;
}
