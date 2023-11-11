const input = require('readline-sync');

const numero_sorteado = 5;

let numero = Number( input.question('Digite um numero para sortear. ')); 

while (numero !== numero_sorteado){
    console.log('Voce errou. Tente novamente...');

    numero = Number(input.question('Digite um numero para sortear. '));
}

console.log('Voce sorteou o numero correto!!!!!!');
