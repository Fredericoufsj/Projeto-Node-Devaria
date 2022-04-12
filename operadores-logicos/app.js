const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você á maior de 18 anos e tem habilitação para saber se você pode entrar no Kart');
console.log('Alem das suas verificações, precisamos verificar se você esta na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2004) {
        console.log('Você não tem 18 anos');
    } else{
        readLine.question('Voce tem habilitação?(Sim/Nao) ', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Voce não tem habilitação para entrar no Kart');
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem vindo Douglas');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo Rafael');
                            break;
                        default:
                            console.log('Seu nome não consta na lista de presença');        
                    }
                })
            }
        })
    }

})