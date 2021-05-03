let nome = prompt('Bem-Vindo(a)! \n Qual é o seu nome?')
let participar = prompt(nome + ', deseja participar do nosso quiz? \n 1. Sim \n 2. Não')


if (participar == 1) {
    let perguntaUm = prompt('Pergunta número um: \n - Qual é o maior osso do corpo humano? \n 1. Fêmur \n 2. Tíbia \n 3. Coluna')
    let perguntaDois = prompt('Pergunta número dois: \n - Qual material é extraído da seringueira? \n 1. Papel \n 2. Madeira \n 3. Látex')
    let perguntaTres = prompt('Pergunta numero três: \n - Qual é a capital dos Estados Unidos? \n 1. Nova York \n 2. California \n 3. Washington')
    let perguntaQuatro = prompt('Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo? \n 1. Saci \n 2. Caipora \n 3. Curupira')
    let PerguntaCinco = prompt('Qual é o maior país do mundo em território? \n 1. China \n 2. Rússia \n 3. Brasil')
    let idBemVinda = document.getElementById('parabens');
    idBemVinda.innerHTML = 'Parabéns, ' + nome

        if (perguntaUm == 1) {
            let perguntaUmCorreta = document.getElementById('correta1');
            perguntaUmCorreta.innerHTML = 'Resposta 1 Correta'
        } else {
            let perguntaUmIncorreta = document.getElementById('errada1');
            perguntaUmIncorreta.innerHTML = 'Resposta 1 Incorreta'
            }
                
        if (perguntaDois == 3) {
            let perguntaDoisCorreta = document.getElementById('correta2');
            perguntaDoisCorreta.innerHTML = 'Resposta 2 Correta'
            } else {
            let perguntaDoisIncorreta = document.getElementById('errada2');
            perguntaDoisIncorreta.innerHTML = 'Resposta 2 Incorreta'
            }

        if (perguntaTres == 3) {
            let perguntaTresCorreta = document.getElementById('correta3');
            perguntaTresCorreta.innerHTML = 'Resposta 3 Correta'
        } else {
            let perguntaTresIncorreta = document.getElementById('errada3');
            perguntaTresIncorreta.innerHTML = 'Resposta 3 errada'
            }  

        if (perguntaQuatro == 2) {
            let perguntaTresCorreta = document.getElementById('correta4');
            perguntaTresCorreta.innerHTML = 'Resposta 4 Correta'
        } else {
            let perguntaTresIncorreta = document.getElementById('errada4');
            perguntaTresIncorreta.innerHTML = 'Resposta 4 errada'
            }
            
        if (perguntaCinco == 2) {
            let perguntaTresCorreta = document.getElementById('correta5');
            perguntaTresCorreta.innerHTML = 'Resposta 5 Correta'
        } else {
            let perguntaTresIncorreta = document.getElementById('errada5');
            perguntaTresIncorreta.innerHTML = 'Resposta 5 errada'
            }        

    
} else if (participar != 1) {
   alert ('Tchau, ' + nome);  
} 