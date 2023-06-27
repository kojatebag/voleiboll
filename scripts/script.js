
var btn = document.querySelectorAll(".botao")

function carConteudo(){
    var add =  document.getElementById("lev").innerHTML = "<h2>Oposto</h2> <h3>Maior especialista em pontuar em uma equipe de vôlei, o oposto recebe esse nome por atuar sempre na posição oposta à do levantador. Como são experts em ataque, eles são boas opções para vir do fundo da quadra e atacar antes da linha de três metros. Cabe ao oposto ser o desafogo do levantador em situações mais críticas. Por isso, os jogadores com essa função são comumente chamados de “bola de segurança”.</h3>";
}

function carConteudo1(){
    var add =  document.getElementById("lev").innerHTML = "<h2>Líbero</h2> <h3>A função do líbero no voleibol foi criada pela FIVB (Federação Internacional de Voleibol) em 1998. Esse jogador é facilmente identificado, já que utiliza uniforme de cor diferente dos companheiros de time. O líbero tem função exclusivamente defensiva. Não pode atacar, bloquear ou sacar. Em contrapartida, quando a bola não está em jogo, pode trocar de posição com outro jogador do time sem precisar de autorização do árbitro. Geralmente, os líberos substituem os centrais que estão posicionados no fundo de quadra de acordo com o rodízio — mais adiante, explicaremos com mais detalhes como funciona o rodízio.Ainda que possa haver exceções, jogadores dessa função costumam ser mais baixos e ágeis, para não deixar a bola cair no chão. Eles também costumam se encarregar do levantamento caso o levantador tenha feito o primeiro dos três toques ou esteja distante da bola.</h3>";
}

function carConteudo2(){
    var add =  document.getElementById("lev").innerHTML = "<h2>Ponteiro</h2> <h3>Esses jogadores são responsáveis por atacar das posições 2 e 4 (saída e entrada de rede). Além de terem a função de ajudar na pontuação do ataque, auxiliam o líbero nos passes na defesa. Dessa forma, é comum ouvirmos “ponteiro-passador”, quando há referência a um jogador que é bom na recepção e também aparece como uma opção ofensiva para o levantador.Para o equilíbrio tático da equipe, o mais comum é que os treinadores optem por um ponteiro especialista em recepção, o passador, e outro que se dedique mais ao ataque.A escalação de dois pontas exclusivamente especialistas no ataque tende a prejudicar a recepção e comprometer a participação dos centrais, diminuindo as alternativas de passe para o levantador.</h3>";
}

function carConteudo3(){
    var add =  document.getElementById("lev").innerHTML = "<h2>Central</h2> <h3>O central é, normalmente, um dos atletas mais altos do time de vôlei. Cabe ao jogador dessa função atacar da posição 3, no meio-de-rede. Além disso, exerce papel muito importante no bloqueio. São os centrais que recebem as bolas mais baixas e rápidas do levantador no ataque.Quando estão posicionados no fundo de quadra, geralmente, os centrais dão lugar ao líbero.</h3>";
}

function carConteudo4(){
    var add =  document.getElementById("lev").innerHTML = "<h2>Levantador</h2> <h3>Todas as jogadas ofensivas no voleibol passam pelas mãos do levantador. Ele é responsável por armar os ataques, passando ou “levantando” a bola para aquele que será o responsável por atacar. Os levantadores precisam ser precisos nos passes e ter atenção ao posicionamento do time adversário, para saberem para qual companheiro de time devem direcionar o levantamento, evitando bloqueios. A função de levantador está diretamente relacionada aos sistemas táticos do vôlei.</h3>";
}

function swapStyleSheet(sheet){
    document.getElementById('pagestyle').setAttribute('href', sheet)
}
