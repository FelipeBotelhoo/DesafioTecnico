
/* 
   Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela
    ocorre.

    IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
*/



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Função para contar letra 'a' 
function contarA(str) {

    // Converte a string para minuscula 
    const palavra = str.toLowerCase();
    let contador = 0;

    for (let p of palavra) {
        if (p === 'a') {
            contador++;
        }
    }

    return contador;
}

// entrada de palavra pelo usuario
rl.question('Digite uma palavra para verificar a quantidade de letras \'a\': ', (entrada) => {
    const palavra = contarA(entrada);

    if (palavra > 0) {
        console.log(`A letra 'a' ocorre ${palavra} vez(es).`);
    } else {
        console.log('A letra \'a\' nao ocorre na palavra');
    }
    
    rl.close();
});
