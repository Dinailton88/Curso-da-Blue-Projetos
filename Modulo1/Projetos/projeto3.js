const prompt = require("prompt-sync")();

//           FUNÇÃO TERMINAL LIMPO//
function contLimpa() {
  cont = prompt("\nAperte enter para continuar: ");
  while (cont != "") {
    cont = prompt("\nAperte APENAS enter para continuar!");
  }
  console.clear();
}

//            FUNÇÃO PRA MUDAR STATUS OS STATUS    //

function reacao(voce, o_outro) {
  let status = voce + o_outro;

  return status;
}

//            FUNÇÃO PRA MUDAR STATUS OS STATUS  FAMILIA    //

function moral_familia(statstus1, status2) {
  let moral_f = statstus1 - status2;

  return moral_f;
}

// FUNÇÃO PARA VALIDAR RESPOSTA COM NUMERO   //

function validar_respnum() {
  while (suaAtitude != 1 && suaAtitude != 2 && suaAtitude != 3) {
    suaAtitude = +prompt(
      "[ERRO] Você digitou um valor incorreto! digite uma das opções : 1,2 ou 3: "
    );
  }
}
/// FUNÇÃO PARA VALIDAR RESPOSTA COM SIM OU NÃO//
function validaresp_sn() {
  while (resp != "sim" && resp != "nao") {
    resp = prompt(
      " Deseja jogar novamente? Digite APENAS sim ou nao: "
    ).toLocaleLowerCase();
    console.clear();
  }
}

//// FUNÇÃO PIRUAGEM///

function piruagem() {
  for (
    status_Jogador.moral_Comchefe = status_Jogador.moral_Comchefe;
    status_Jogador.moral_Comchefe <= 10;
    status_Jogador.moral_Comchefe += 1
  ) {
    dia++;
    console.log(
      ` Sua moral agora é : ${status_Jogador.moral_Comchefe}. ${dia}º dia de piruagem. `
    );
    console.log(` Aperte enter para servir cafe ao chefe e fazer hora extra.`);
    contLimpa();
  }
}

// VARIAVEIS DE TEMPO//
let ini = new Date();
let tempo = {
  hora: 7,
  minutos: 0,
  dia: 1,
};

// VARIAVEIS DE AÇÃO//
let suaAtitude;
let resp;
let cont;

//                INICIO DA HISTORIA CHAMADO        //

console.log(`\nAtenção! você é funcionario(a) de uma  empresa, e esta tentando uma promoção, mas isso não depende apenas de você, então você precisa de equilibrio em suas escolhas.
\nEntão, mesmo que tenha boas atitudes talvez você não se saia muito bem a princípio, porque lembre-se...:"você só controla você mesmo." `);
console.log();
contLimpa();
console.clear();
console.log(`Mas aí vem a seguinte questão: Se você só controla a si mesmo, será que vale apena fazer as coisas certas apenas esperando um retorno ou reconhecimento  do outro, 
\ne se esse retorno positivo e reconhecimento não vier? 
\nNão seria melhor fazer as coisas certas  para estar com a consciência em paz, tranquila, e melhor com você mesmo? 
\n#ficadica`);
contLimpa();
console.log(`O Objetivo do jogo é manter o EQUILIBRIO, Você escolherá sempre um NUMERO correspondente a atitude que quer tomar conforme aparecerá na tela
\nUm dos seus status o Autodominio será de máxima importância para o sucesso. 
\nNo decorrer do jogo você verá a importancia dele.Caso ele seja zerado, você perderá o jogo instantaneamente!
\nVamos começar?
`);
contLimpa();

let listareacao_chefe = [
  ([op_Agressivo] = [-8, -9, -10]),
  ([op_Normal] = [-3, -4, -2]),
  ([op_Calmo] = [1, 2, 4]),
];
let agressivo;
let normal;
let calmo;

// FUNÇÃO PIRUAGEM//

function piruagem() {
  for (
    status_Jogador.moral_Comchefe = status_Jogador.moral_Comchefe;
    status_Jogador.moral_Comchefe <= 10;
    status_Jogador.moral_Comchefe += 1
  ) {
    tempo.dia++;
    console.log(
      ` Sua moral agora é : ${status_Jogador.moral_Comchefe}. ${tempo.dia}º dia de piruagem. `
    );
    console.log(` Aperte enter para servir cafe ao chefe e fazer hora extra.`);
    contLimpa();
  }
  return status_Jogador.moral_Comchefe1;
}

// VARIAVEIS DE CONTROLE DOS STATUS DO JOGADOR    //

//// OBJETO INICIAL E STATUS INICIL JOGADOR/////

/// STATUS JOGADOR///
let status_Jogador = {
  nome: "",
  autodominio: 8,
  cansaco: 10,
  moral_Comchefe: 5,
  reconhecimento_Dafamilia: 10,
};
let resp1;

///         PRIMEIRO LAÇO QUE A CONTECERÁ SE OPTAR PELO EMBATE DIRETO COM CHEFE       ///
do {
  let status_Jogador = {
    nome: "",
    autodominio: 8,
    cansaco: 10,
    moral_Comchefe: 5,
    reconhecimento_Dafamilia: 10,
  };

  status_Jogador.nome = prompt("Digite seu nome para começar: ");

  /// REAÇÕES DO CHEFE//

  listareacao_chefe = [
    ([op_Agressivo] = [-11, -9, -10]),
    ([op_Normal] = [-3, -4, -2]),
    ([op_Calmo] = [1, 3, 4]),
  ];

  agressivo =
    listareacao_chefe[0][Math.floor(Math.random() * listareacao_chefe.length)];
  normal =
    listareacao_chefe[1][Math.floor(Math.random() * listareacao_chefe.length)];
  calmo =
    listareacao_chefe[2][Math.floor(Math.random() * listareacao_chefe.length)];

  //      LISTA DE POSSIVEIS REAÇÕES ALEATORIAS CHEFE  DE ACORDO COM OPÇAO DO USUARIO CADA OPÇÃO AFETARA OS STATUS DE UMA FORMA //

  console.log(
    `\nOla ${status_Jogador.nome}! esse é o ${tempo.dia}º dia. Esse seu status inicial:  `
  );
  console.log(status_Jogador);
  contLimpa();
  //// PRIMEIRA PERGUNTA PARA ALTERAÇÃO DE STATUS//
  console.log(`\n${tempo.dia}º dia! Você acorde de manhã cedo as ${tempo.hora} horas e ${tempo.minutos} minutos com seu chefe ligando. \nEle nem te da um bom dia, te enche de desaforo e esta te cobrando algo que não é culpa sua, e nem mesmo sua responsabiliade.
\n                                          Voce :`);
  let decida = [
    "1- Coloca ele no lugar dele e diz que  nem se trata de obrigação sua e ainda fala que hoje nem vai trabalhar",
    "2- Explica que houve algum engano e que quando chegar no trabalho explica e segue com sua rotina para tomar café com a familia",
    "3- Respira fundo e diz que ira antecipar a ida pro trablho, e sai rapido nem fala e nem toma café  com a familia como sempre faz",
  ];

  /// STATUS CHEFE QUE SERÁ ALTERADO DE ACORDO COM 1 COM ESCOLHA DE JOGADOR 2 METODO ALEATORIO AFETANDO DIRETAMENTE STATUS DO JOGADOR///

  console.log(decida);
  suaAtitude = +prompt("Digite o numero correspondente a sua atitude: ");
  validar_respnum();

  /*console.log(` O retorno da função agora é : ${result_atitude} `);*/
  console.log(`\n Você escolheu a opção ${suaAtitude} `);

  //PRIMEIRA CONDIÇÃO PARA ALTERAÇÃO DAS VARIAVEIS DE ACORDO COM AÇÃO DO JOGADOR A REAÇÃO DO CHEFE VEM DE FORMA ALEATORIA//
  if (suaAtitude == 1) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, agressivo);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      agressivo
    );
    tempo.minutos += 32;

    console.log(
      `\nVocê mal começou e acaba de perder o jogo! Seu chefe falou que alem de não ser promovido você está demitido. Agora são ${tempo.hora} e ${tempo.minutos} minutos Seu autodominio caiu para ${status_Jogador.autodominio} sempre que ele zerar ou ficar abaixo de zero , você perde o jogo instantaneamente `
    );
    console.log(status_Jogador);
    contLimpa();
    validaresp_sn();
    resp = 'sim'
    if (resp =='sim'){
      resp = 'sim'
    }
    if (resp =='nao'){
      break;
    }

    
  } else if (suaAtitude == 2) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, normal);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      normal
    );
    status_Jogador.reconhecimento_Dafamilia = reacao(
      status_Jogador.reconhecimento_Dafamilia,
      normal
    );
    tempo.hora += 1;
    tempo.minutos += 40;
    console.log(`\nMuito Bom! você teve  uma atitude sensata, mas nem sempre é o suficiente para seu chefe, ele é muito exigente.
    \nSeu autodominio foi para $ ${status_Jogador.autodominio} e a moral com chefe foi para ${status_Jogador.moral_Comchefe}. 
    \nMas você poderá recupera-la quando chegar no trabalho, lembre-se apesar de todos os status serem importantes, é o Autodominio que fara sua moral com chefe aumentar e conseguir a tão sonhada promoção.`);
    contLimpa();
    console.log(
      ` Seu agora são ${tempo.hora} horas e ${tempo.minutos}minutos  status atual é: `
    );
    console.log(status_Jogador);
    console.log(` Aperte enter para ir pro Trablho `);
    contLimpa();
  } else if (suaAtitude == 3) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, calmo);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      calmo
    );
    tempo.minutos += 10;
    console.log(` Parabens! sua moral com chefe acaba de aumentar, ela foi para : ${status_Jogador.moral_Comchefe} o seu autodominio tambem aumentou para : ${status_Jogador.autodominio}. Agora são ${tempo.hora} horas e ${tempo.minutos} minutos Mesmo estando certo o melhor é ficar calado, 
  porem você saiu sem falar com (sua)/(seu) esposa(o) e ela(e) ta fazendo barraco, e o condominio todo ouvindo... Aperte enter para entrar na DR`);
    contLimpa();
    tempo.hora += 2;
    console.log(
      ` Na DR vc ficou 2 horas agora são: ${tempo.hora} horas e ${tempo.minutos} minutos `
    );
  }

  // SEGUNDA CONDIÇÃO PARA MUDANÇA DE CENARIO //
do {

  console.log(
    ` Voce Chegou no trabalho, e logo de cara vê seu chefe e o colega responsavel pelo trabalho  o qual o chefe  estava cobrando você : `
  );
  acao_notrabalho = [
    "1- Já fala com chefe e explica de quem é a culpa, porem isso talvez não ajude pois o chefe quer uma solução",
    "2- Pede pro colega Assumir a responsabilidade mas até lá sem promoção e vc não sabe se ele vai realmente assumir o BO",
    "3 -Explica o chefe que era esse  colega o responsavél pelo problema, mas tambem diz que pode ajudar o colega com a situação pois o que importar é resolver",
  ];
  console.log(acao_notrabalho);

  suaAtitude = +prompt(` Digite sua atitude: `);
  if (suaAtitude == 1) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, agressivo);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      agressivo
    );
    console.log(status_Jogador);
    contLimpa();
    console.log(
      ` Infelizmente você perdeu jogo! Va mais devagar da proxima vez. quer continuar?: `
    );
    respt = validaresp_sn();
  } else if (suaAtitude == 2) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, normal);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      normal
    );

    console.log(
      ` Sua moral com chefe agora é : ${status_Jogador.moral_Comchefe} . Seu seu status atual é: `
    );
    console.log(status_Jogador);
    contLimpa();
    if (status_Jogador.moral_Comchefe <= 0) {
      console.log(
        `O colega não falou nada e vc foi demitido junto com ele. Você acaba de perder o jogo... Aperte enter para continuar: `
      );
      resp = prompt();
    } else if (status_Jogador.moral_Comchefe < 10) {
      console.log(`Infelizmente sua decisão, te atrasou muito... Se você so controla a vc mesmo, porque deixou essa decisão na mão do colega? 
          \nEle não falou nada ao seu chefe. \nAgora aperte enter pra ficar servindo cafezinho e fazendo hora extra até consegui que sua moral chegue em 10 e vc consiga  a promoção. `);
      piruagem();

      if (status_Jogador.moral_Comchefe >= 10) {
        console.log(
          ` Parabens! apos muita hora extra e muito cafezinho você conseguiu aumentar sua moral com chefe que agora está em  ${status_Jogador.moral_Comchefe} `
        );
        console.log(
          ` Após o ${tempo.dia}º dia Você conseguiu sua promação. Esse é seu status final: `
        );
        console.log(status_Jogador);

        break;
      }
    } else if (status_Jogador.moral_Comchefe >= 10) {
      console.log(
        ` Voce ganhou Jogou! atiingiu moral com chefe de ${status_Jogador.moral_Comchefe} e conseguiu a tão sonhada promoção! `
      );

      break;
    }
  } else if (suaAtitude == 3) {
    status_Jogador.autodominio = reacao(status_Jogador.autodominio, calmo);
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      calmo
    );

    if (status_Jogador.moral_Comchefe >= 10) {
      console.log(
        ` Voce ganhou Jogou! atigingiu moral com chefe de ${status_Jogador.moral_Comchefe} e conseguiu a tão sonhada promoção! Seu Status atual é : `
      );
      console.log(status_Jogador);
      contLimpa();
      break;
    }
    console.log(
      ` Parabens! sua moral com chefe agora é : ${status_Jogador.moral_Comchefe} . Seu seu status atual é: `
    );
    console.log(status_Jogador);
    contLimpa();
    console.log(
      ` Porém sua atitude foi tão boa, que seu cansaço virou moral com chefe e foi somado a ele .Você GANHOU o jogo! veja seu status Final:`
    );
    status_Jogador.moral_Comchefe = reacao(
      status_Jogador.moral_Comchefe,
      status_Jogador.cansaco
    );
    status_Jogador.cansaco = moral_familia(
      status_Jogador.cansaco,
      status_Jogador.cansaco
    );
    console.log(status_Jogador);
  
} 
}while(resp1 == 't')
 
  
  

  ///FIM DO LACO DO TRABALHO///
  
} while (resp == "sim"); //FIM LAÇO PRINCIPAL//