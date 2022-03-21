const prompt = require("prompt-sync")();
let resp;
do {
  let lista = ["0-Pedra", "1-Papel", "2-Tesoura"]; //DEFINIÇÃO DAS VARIAVEIS
  let contjog = 0;
  let contmaq = 0;

  let comput = lista[Math.floor(Math.random() * lista.length)];

  let rodadas = +prompt(
    "Olá vamos jogar Jokenpô ? Digite o numero de rodadas que quer jogar: " // INICO DO JOGO//
  );
  console.clear();

  while (rodadas == 0 || isNaN(rodadas) || rodadas <0) {
    rodadas = +prompt(" Digite um numero válido  de rodadas que quer jogar: "); // VALIDAÇÃO DE DADOS ACEITOS//
    console.clear();
  }
  console.clear();

  for (let i = 1; i <= rodadas; i++) {
    //INICIO E VERIFICAÇÕES DE QUANT DE RODADAS//
    console.log();
    console.log(lista);
    console.log();
    jogador =
      lista[
        +prompt(
          ` ${i}º Rodada ! Digite um dos valores acima correspondente ao objeto que quer jogar : ` //ECOLHA DO JOGADOR COM NUMERO JA APARTIR DA LISTA//
        )
      ];
    console.log();
    console.clear();
    comput = lista[Math.floor(Math.random() * lista.length)]; // ESCOLHA ALETORIA DA MAQUINA//

    while (
      jogador != "0-Pedra" && // VALIDAÇÃO DE ENTRADA DO USUARIO//
      jogador != "1-Papel" &&
      jogador != "2-Tesoura"
    ) {
      console.log(lista);
      jogador =
        lista[
          +prompt(
            ` Você digitou um valor incorreto ! Digite novamente um dos numeros acima. : `
          )
        ];
        console.clear();
    }
    console.clear();

    if (
      (jogador == "0-Pedra" && comput == "2-Tesoura") || // CONDIÇÃO SE JOGADOR VENCEDOR//
      (jogador == "1-Papel" && comput == "0-Pedra") ||
      (jogador == "2-Tesoura" && comput == "1-Papel")
    ) {
      console.log(
        `Você escolheu ${jogador} e a Maquina escolheu ${comput} Parabèns! vc GANHOU essa rodada! ` //MENSAGEM DE VITORIA DA RODADA DE JOGADOR//
      );
      contjog++;
      console.log();
    } else if (
      (comput == "0-Pedra" && jogador == "2-Tesoura") || // CONDIÇÃO SE MAQUINA VENCEDORA//
      (comput == "1-Papel" && jogador == "0-Pedra") ||
      (comput == "2-Tesoura" && jogador == "1-Papel")
    ) {
      console.log(
        `Você escolheu ${jogador} e a Màquina escolheu ${comput}. Essa você PERDEU. ` //MENSAGEM DE VITORIA RODADA DA MAQUINA//
      );
      contmaq++;
      console.log();
    } else {
      console.log(
      `Você escolheu  ${jogador} e a Màquina também escolheu  ${comput}. EMPATE ` // MENSAGEM DE RODADA EMPATE//
      );
      console.log();
    }

    console.log(
         `      PARCIAL : Você GANHOU  ${contjog}   rodadas e a Màquina  ${contmaq}  rodadas!  ` // INFORMAÇÕES DE VITORIAS//
    );
    
  }
  console.log();

  //DEFININDO VENDEDOR//
  if (contjog > contmaq) {
    console.log(
     `RESULTADO FINAL: Parabens! você é o grande VENCEDOR com ${contjog} vitorias .  ` //MENSAGEM DE VITORIA DO JOGADOR//
    );
  } else if (contjog < contmaq) {
    console.log(
     `RESULTADO FINAL: Você perdeu o jogo. Com ${contmaq} vitorias a maquina é a grande vencedora. `
    ); // MENS VITORIA DA MAQUINA//
  } else {
    console.log("RESULTADO FINAL: Vocês empataram o jogo não houve um vencedor!"); //MENSAGEM DE EMPATE//
  }
  console.log();
  //VALIDAÇÃO DE ENTRADA DE USUARIO  A JOGAR NOVAMENTE OU NÃO//
  resp = prompt(
    "Deseja jogar novamente? Digite sim ou nao: "
  ).toLocaleLowerCase();

  while (resp != "sim" && resp != "nao") {
    resp = prompt(
      "Você digitou errado! Digite sim ou não: "
    ).toLocaleLowerCase();
    console.clear();
  }

  if (resp == "sim") {
    //CONDIÇÃO PARA REINICIAR O JOGO//
    console.log();
    console.clear();
  }
} while (resp == "sim");

console.clear();
console.log();
console.log("Fim de jogo! Até a Proxima.");
