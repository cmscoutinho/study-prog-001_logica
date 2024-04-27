// Exercício Aula 02-09-1

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaUser = prompt("Que dia é hoje?");
console.log("Dia escolhido: " + diaUser);

if (diaUser == "Sábado" || diaUser == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}
