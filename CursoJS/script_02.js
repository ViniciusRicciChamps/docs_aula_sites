// ************* tipos de variaveis ****************

var booleano = false;       // tipo booleano
var booleano_vrdd = true;   //

var valor_nulo = null;      //tipo nulo

var indefinido = undefined; // tipo indefinido

var valor_numero_inteiro = 245; //tipo numero (inteiro)

var valor_numero_fracionario = 60.60;   // tipo numero (decimal)

var texto = "ola mundo!!!";         // tipo string (texto ou caractere)


// ******************* LAÇOS DE REPETIÇÃO ********************//;

// tipo FOR (PARA)

/* UM LAÇO FOR É REPETIDO ATÉ QUE A CONDIÇÃO ESPECIFICA SEJA FALSA, CASO
A CONDIÇÃO SEJA FALSA, O LAÇO TERMINARÁ

INCREMENTO ADICIONA MAIS UM(1) NUMERO A VARIAVEL
EX: SE VARIVEL var dinheiro = 0 E DEPOIS FIZER UM dinheiro++, O VALOR DA 
VARIAVEL dinheiro SERÁ 1.

DECREMENTO SUBTRAI UM(1) NUMERO A VARIAVEL
EX: SE VARIVEL var dinheiro = 2 E DEPOIS FIZER UM dinheiro--, O VALOR DA 
VARIAVEL dinheiro SERÁ 1.

// (VARIAVEL DE INICIO ; CONDIÇÃO ; INCREMENTO OU DECREMENTO)


for (let index = 0; index <= 10; index++) {
    
    console.log(index);
    
}
*/

//laço de reptição DO WHILE
/* a instrução será executada uma vez antes da condição ser verificada, caso
a condição seja verdadeira, então o laço será executado novamente. ao final
de cada execução , a condição é verificada.

var valor_01 = 10;

do{
    console.log(valor_01);
    valor_01--;
}while (valor_01 >= 0);
    
*/

// laço de repetição WHILE
/* uma declaração while executa suas instruções, desde que uma condição especificada,
seja avaliada como verdadeira.

Se a condição se tornar falsa, a declaração dentro do laço para a execução e o controle
é passado para a instrução após o laço.

O teste da condição ocorre antes que o laço seja executado. desta forma se a condição 
for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa
o laço termina e passa o controle para as instruções após o laço.*/

var valor_02 = 0;

while(valor_02 >= 10){

    console.log(valor_02);

}
