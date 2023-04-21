desafio


let area = prompt("Você tem mais afinidade com dog ou cat?");
let racas = [];


if (area === "dog") {
  let escolha1 = prompt("Você quer adotar ou comprar?");
  if (escolha1 === "adotar") {
    alert("Ótima escolha, adotar um dog é um grande ato de amor.");
  } else if (escolha1 === "comprar") {
    alert("Certo, posso te dar uma dica? Dar um lar a um dog adotivo é um grande ato de amor.");
  } else {
    alert("Opção inválida.");
  }

  let escolha2 = prompt("Você quer ter 1 dog ou 2 ou mais dogs?");
  if (escolha2 === "1 dog") {
    alert("Legal, vamos continuar para nossa última pergunta:");
  } else if (escolha2 === "2 ou mais dogs") {
    alert("Legal, vamos continuar para nossa última pergunta:");
  } else {
    alert("Opção inválida.");
  }

} else if (area === "cat") {
  let escolha1 = prompt("Você quer adotar ou comprar??");
  if (escolha1 === "adotar") {
    alert("Ótima escolha, adotar um cat é um grande ato de amor.");
  } else if (escolha1 === "comprar") {
    alert("Certo, posso te dar uma dica? Dar um lar a um cat adotivo é um grande ato de amor.");
  } else {
    alert("Opção inválida.");
  }

  let escolha2 = prompt("Você quer ter 1 cat ou 2 ou mais cats?");
  if (escolha2 === "1 cat") {
    alert("Legal, vamos continuar para nossa última pergunta:");
  } else if (escolha2 === "2 ou mais cats") {
    alert("Legal, vamos continuar para nossa última pergunta:");
  } else {
    alert("Opção inválida.");
  }
}

let quaisRacas = function() {
  let raca = prompt("Digite as raças:");
  if (raca) {
    racas.push(raca);
    alert(`As raças ${raca} foram adicionadas na lista.`);
  } else {
    alert(`As raças que você tem mais afinidade são: ${raca.join(", ")}.`);
  }
}

quaisRacas();





