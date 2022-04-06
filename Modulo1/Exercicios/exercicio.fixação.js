/*EXERCICIO DE FIXAÇÃO
01*/
const prompt = require("prompt-sync")();
const nota_a = 6;
const nota_b = 9;
const media = (nota_a * 4 + nota_b * 6) / 2;
console.log(` A media do aluno é ${media} pontos `);

//2//

let peça1 = Number(33.42);
let peça2 = Number(40.53);
let quant1 = Number(5);
let quant2 = Number(6);
let valor = peça1 * quant1 + peça2 * quant2;
console.log(` O valor a ser pago é R$ ${valor} `);

///3///


const anos = Number(
  prompt(
    "A seguir digite sua idade em ANOS , MESES e DIAS, comçando por ANO : "
  )
);
const meses = Number(prompt("Agora MESES : "));
const dias = Number(prompt("Agora DIAS : "));
const total = anos * 365 + (meses * 30) + dias;
console.log(`Ao todo você ja viveu ${total} dias `);


//// 4 ////




