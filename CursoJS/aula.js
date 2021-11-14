
// ***************** VARIAVEIS ****************************** 
/*
let nome = 'vinicius';  //string literal
let idade = 25;         //number literal
let estaAprovado = true;//BOOLEAN
let sobreNome;          //undefined SEM DEFINIÇÃO
let corSelecionado = null; //NULL / nulo redefinir um valor
const valorIngressoAdulto = 20; //constante
//************************************************************ */

// ************************ OBJETO ****************************
/*
let pessoa = {
    nome: 'joao', // chave : valor
    idade: 52,
    estaAprovado: true,
    sobreNome: 'Martins',
    salario: 2500,
    setor: 'financeiro',
    chefe: 'Vinicius'
};
// ****************************************************** */

/* *********************** ARRAYS *********************************
let pessoa = ['Vinicius',25, 'Costa Ricci', 'casado', 'São Paulo', 1500];
console.log(pessoa);
*************************************************************** */

/* ************************ FUNÇOES ************************* */
// VERBO + SUBSTANTIVO
//EX: resetaCor, AlterarTamanho
/*
let corSite = 'Azul';
let corSite_01 = 'Verde';

resetaCor_01();
// SEM ARGUMENTO
function resetaCor_01(){
    corSite = '';
};
console.log(corSite);
//////////////////////////

// COM ARGUMENTO
resetaCor('roxo');
function resetaCor(cor){
    corSite_01 = cor;
};
console.log(corSite_01);
/////////////////////////// 

let calcSom = soma(25, 58);
console.log(calcSom);

multi(8, 32);
div(78, 29);
sub(96, 57);


function soma(valor01, valor02){
    let result = valor01 + valor02;
    return result;
};

function multi(valor01, valor02){
    let result = valor01 * valor02;
    console.log(result);
};

function div(valor01, valor02){
    let result = valor01 / valor02;
    console.log(result);
};

function sub(valor01, valor02){
    let result = valor01 - valor02;
    console.log(result);
}; */

// OPERADORES de IGUALDADE 
/*
//igualdade ESTRITA
console.log(1 === 1); // COMPARA OS VALORES E O TIPO
console.log('1' === 1); //FALSE pois o primeiro 1 é STRING

//igualdade SOLTA
console.log(1 == 1); // NÃO COMPARA TIPO
console.log('1' == 1); //TRUE pois ele converte o tipo */

// OPERADOR TERNARIO
/*
let pontos = 100;
let tipo  = pontos > 100 ? 'premium' : 'comum';
//SE PONTOS FOR > QUE 100 ELE VAI SER 'PREMIUM' SENÃO 'COMUM'*/


/*
// DOM = Document Object Model; //manipula todos os elementos do html 


//innerHTML troca o elemento HTML
document.getElementById("id_h1").innerHTML = "<button> Botao </button>";


// pega o elemento pela class, como tem dois elementos com o mesmo nome de class
// voce coloca o neumro do array [0] (no caso 0, pois é p primeiro)
document.getElementsByClassName("class_h2")[0].innerHTML = "Produto Alterado!!";

//pega o elemento pela tag
document.getElementsByTagName('button');


//pega os elementos pelo nome
document.getElementsByName("input_nome")
*/

// ************ QUERY SELECTOR ******************

//document.querySelector('#botao_query').innerHTML = "Botao Cadastro"


//Usar classList é uma alternativa conveniente para acessar a
// lista de classes de um elemento como uma seqüência delimitada por espaço através de lement.className.
//adiciona ou remov classes

//verifica com o 'contains('') se há uma class dentro do elemento
document.querySelector(".exemplo").classList.contains("valor");


function cor_escolhida(valor_cor){
   var ultima_cor = valor_cor;

    if (ultima_cor == "amarelo") {
        ultima_cor = "amarelo";
        document.querySelector(".exemplo").classList.remove("verde");
        document.querySelector(".exemplo").classList.remove("azul") 

    }else if(ultima_cor == "azul"){
        ultima_cor = "azul";
        document.querySelector(".exemplo").classList.remove("verde");
        document.querySelector(".exemplo").classList.remove("amarelo")

    }else if(ultima_cor == "verde"){
        ultima_cor = "verde";
        document.querySelector(".exemplo").classList.remove("azul");
        document.querySelector(".exemplo").classList.remove("amarelo")
    }

   
    switch (ultima_cor) {
        case 'verde':
            
            console.log(ultima_cor)
            document.querySelector(".exemplo").classList.add("verde");
            break;
        case 'amarelo':
            document.querySelector(".exemplo").classList.remove("ultima_cor")
            document.querySelector(".exemplo").classList.add("amarelo");
            break;
        case 'azul':
            document.querySelector(".exemplo").classList.remove("ultima_cor")
            document.querySelector(".exemplo").classList.add("azul");
            break;
        default:
            break;
    }
}