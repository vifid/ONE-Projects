alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);2
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto! Parabéns! ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1) {
//    alert(`Você descobriu o número secreto! Parabéns! ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Você descobriu o número secreto! Parabéns! ${numeroSecreto} com ${tentativas} tentativa!`);} 