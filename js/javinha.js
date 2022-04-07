const calcular = document.getElementById('calcular');

//const cria uma varivael / pegue o elemento cuja o id é 'nome'

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        //se nome diferente vazio = nome preenchido.     
        // !== significa diferente; '' significa vazio(nada); && significa "e"

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        // tofixed arredonda 1 casa depois da virgula 

        let classificacao = '';

        if (valorIMC < 18.5) {

            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25) {

            classificacao = 'Está com o peso ideal';
        } else if (valorIMC < 30) {

            classificacao = 'esta levemente acima do peso';
        } else if (valorIMC < 35) {

            classificacao = 'voce esta com obesidade grau 1';
        } else if (valorIMC < 40) {

            classificacao = 'voce esta com obesidade grau 2';
        } else {


            classificacao = 'voce esta com obesidade grau 3';


        }



        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}`;

    } else {
        resultado.textContent = 'preencha todos os campos!'
            //para valor dentro da div usa o textcontent
    }

}
calcular.addEventListener('click', imc);
//quando clickar executa o comando imc