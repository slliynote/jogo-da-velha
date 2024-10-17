const currentPlayer = document.querySelector(".currentPlayer") /* é um h2
 desenvolvimento front-end, onde você interage com a 
árvore de documentos HTML usando JavaScript.  */
let selected;  //  uma variavel 
let player = "X"; // outra variavel 

let positions = [  // uma variaveis com todos os padrões possiveis para se ganhar 
   [1,2,3],
   [4,5,6],
   [7,8,9],
   [1,4,7],
   [2,5,8],
   [3,6,9],
   [1,5,9],
   [3,5,7],
];

function init() {    
   selected = []; // mudou o selected para um vector

   currentPlayer.innerHTML = `jogador da vez: ${player}`; //interação com o dom h2 usando a variavel currentplayer 

   

   document.querySelectorAll(".game button").forEach((item) => {  //selecionando todos os botões atráves 
   // de uma classe pegando todos, .foreach pega todos os botões e coloca em item, 
    item.innerHTML = ""; //adiciona nada no innerHTML dos botões 
    item.addEventListener("click", newMove); //pega os botôes e coloca um addeventlistener click e chama
    // a função newNome
   });
}

init()


function newMove(e) {  //ele pega o event do addeventListener
   const index = e.target.getAttribute("data-i"); // Isso presume que o evento seja relacionado a um elemento HTML que possui um atributo data-i.
   // O valor do atributo data-i é obtido usando o método getAttribute. uma manipulados de evento
   e.target.innerHTML = player; //ele pega o evento click, e coloca o X ou O no botão 
   e.target.removeEventListener("click", newMove); //ele remove para só poder ser clicado uma vez 
   selected[index] = player; //é relacinado com o sitema de vitoria 

   setTimeout(() => { //settimeout com (() =>, chama o metodo check() e adciona 100 no tempo
     check();
   },100);

   player = player === "X" ? "O" : "X"; // se player for iqual a X então mude O se não mude para X
   currentPlayer.innerHTML = `jogador da vez: ${player}`//class currentPLayer = jogador da vez player
}

function check() {  //check 
   let playerLastMove = player === "X" ? "O" : "X"; //variavel playerlastmove = se player = x mude para O se não mude para X

   const items = selected //const itens iqual a selected
   .map((item, i) => [item, i]) //A função map está iterando sobre cada elemento do array original.
   //Para cada elemento, ela retorna um novo array [item, i], onde item é o valor do elemento e i é o índice desse elemento no array original.
   //No final dessa etapa, você terá um array de arrays, onde cada subarray contém o valor original e o índice correspondente.

   .filter((item) => item[0] === playerLastMove) //A função filter está filtrando os subarrays com base na condição especificada.
  // Ela mantém apenas os subarrays onde o valor (item[0]) é estritamente igual a playerLastMove.
   .map((item) => item[1]); //A última função map está mapeando os subarrays resultantes para obter apenas os índices (item[1]).
  // Isso resulta em um array contendo apenas os índices dos elementos que atenderam à condição no passo anterior.


   for(pos of positions){
    if (pos.every((item) => items.includes(item))){
      alert("o jogador" + playerLastMove + "ganhou!");
      init()
      return;
    }
   };
}



