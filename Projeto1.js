const prompt = require("prompt-sync")();

console.log(`  Muito bem candidato  x ! Você percorreu um longo caminho até ate aqui para concorrer a está tão sonhada vaga de
Developer Full Stack. Você trabalhou com varias outras coisas, fez varios outros cursos,  coisas com as quais não se identificava.
   Porém a sua determinação em fazer a tão temida e sonhada "migração profissional" te trouxe até aqui. 
você nunca desitiu e foi essa determinação que fez você se reiventar e buscar novos horizontes,novos caminhos, e estudando programação você se encontrou.
conseguiu achar algo que realmente te da prazer e empolgação onde te permite criar e usar toda sua capacidade criativa
Porém você ainda tem um ultimo desafio para está tão sonhada vaga  nesta empresa.
Atenção Dev! , será um desafio simples mas as suas respostas dirão se vc se preparou e se está preparado.
Responda a essas 05 perguntas: com SIM o NÂO
Começando... `);

let perg1 = prompt(
  "Pergunta 1 : Você fez mais do que assistir videos e resolveu tambem todos os exercicio? "
).toLowerCase();
console.log();

while (perg1 != "sim" && perg1 != "nao") {
  console.log("[ERRO !]Digite apenas sim ou nao");
  console.log();
  perg1 = prompt(
    "Pergunta 1 : Você fez mais do que assistir videos e resolveu tambem todos os exercicio? "
  ).toLowerCase();
}
console.log();

let perg2 = prompt(
  "Pergunta 2 : Você se dedicou o bastante tirou duvidads o quanto pode? "
).toLowerCase();
console.log();

while (perg2 != "sim" && perg2 != "nao") {
  console.log("[ERRO !]Digite apenas sim ou nao");
  console.log();
  perg2 = prompt(
    "Pergunta 2 : Você se dedicou o bastante tirou duvidads o quanto pode?  "
  ).toLowerCase();
}
console.log();
let perg3 = prompt(
  "Pergunta 3 : você domina realmente assuntos como arrays,function e o for dentre outros ? "
).toLowerCase();
console.log();
while (perg3 != "sim" && perg3 != "nao") {
  console.log("[ERRO !]Digite apenas sim ou nao");
  console.log();
  perg3 = prompt(
    "Pergunta 3 : você domina realmente assuntos como arrays,function e o for dentre outros ?  "
  ).toLowerCase();
}
let perg4 = prompt("Pergunta 4 :Você é um aluno Blue Edtech? ").toLowerCase();
while (perg4 != "sim" && perg4 != "nao") {
  console.log("[ERRO !]Digite apenas sim ou nao");
  console.log();
  perg4 = prompt("Pergunta 4 :Você é um aluno Blue Edtech? ").toLowerCase();
}
console.log();
let perg5 = prompt(
  "Pergunta 5 :Aprendeu o que pode nas mentorias e esta com Linkdedin atualizado? "
).toLowerCase();
while (perg5 != "sim" && perg5 != "nao") {
  console.log("[ERRO !]Digite apenas sim ou nao");
  console.log();
  perg5 = prompt(
    "Pergunta 5 :Aprendeu o que pode nas mentorias e esta com Linkdedin atualizado? "
  ).toLowerCase();
}

let sim = 1;
let nao = 0;

if (perg1 == "sim") {
  perg1 = sim;
} else {
  perg1 = nao;
}
if (perg2 == "sim") {
  perg2 = sim;
} else {
  perg2 = nao;
}
if (perg3 == "sim") {
  perg3 = sim;
} else {
  perg3 = nao;
}
if (perg4 == "sim") {
  perg4 = sim;
} else {
  perg4 = nao;
}
if (perg5 == "sim") {
  perg5 = sim;
} else {
  perg5 = nao;
}

let total = perg1 + perg2 + perg3 + perg4 + perg5;

console.log();

if (total == 0) {
  console.log(
    ` ${total} respostas Sim: Você não conseguira se continuar desta forma, até a proxima! `
  );
} else if (total == 1 || total == 2) {
  console.log(
    ` ${total} respostas Sim: Você ainda não está preparado, só olhar videos não vai te ajudar a aprender a programar , precisa praticar muito mais `
  );
} else if (total == 3) {
  console.log(
    ` ${total} respostas Sim: Você começou bem porém ainda falta muita coisa, mas conseguirá atuar nessa aréa de Dev. `
  );
} else if (total == 4) {
  console.log(
    ` ${total} respostas Sim: Depois de muito esforço você conquistou sua vaga na area de TI, embora falte alguns pequenos ajustes. `
  );
} else if (total == 5) {
  console.log(
    ` ${total} respostas Sim: Parabens! está contratado , principalmente por ser um Bluemer!! `
  );
}
