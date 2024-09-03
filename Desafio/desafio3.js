/* 
 Observe o trecho de codigo abaixo: 
 int INDICE = 12,
  SOMA = 0, K = 1; 
  enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } 
  imprimir(SOMA);

Ao final do processamento, qual sera o valor da variavel SOMA?


Resposta: O valor de SOMA apos a ultima iteraçao onde K e 12 é 77.
*/

let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

/* Resposta: 77 */