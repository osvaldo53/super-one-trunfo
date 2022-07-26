const deckFull = [
    card00 = {
        nome: 'Monkey D. Luffy',
        figura: '<img src="image/card-00.png" alt="Card">',
        forca: 95,
        hp: 70,
        resistencia: 60,
        velocidade: 75,
        haki: 80
    },
    card01 = {
        nome: 'Roronoa Zoro',
        figura: '<img src="image/card-01.png" alt="Card">',
        forca: 85,
        hp: 90,
        resistencia: 75,
        velocidade: 70,
        haki: 70 
    },
    card02 = {
        nome: 'Nami',
        figura: '<img src="image/card-02.png" alt="Card">',
        forca: 90,
        hp: 40,
        resistencia: 40,
        velocidade: 60,
        haki: 30
    },
    card03 = {
        nome: 'Usopp',
        figura: '<img src="image/card-03.png" alt="Card">',
        forca: 50,
        hp: 60,
        resistencia: 50,
        velocidade: 85,
        haki: 60
    },
    card04 = {
        nome: 'Sanji',
        figura: '<img src="image/card-04.png" alt="Card">',
        forca: 80,
        hp: 70,
        resistencia: 60,
        velocidade: 90,
        haki: 65
    },
    card05 = {
        nome: 'Tony Tony Chopper',
        figura: '<img src="image/card-05.png" alt="Card">',
        forca: 45,
        hp: 75,
        resistencia: 90,
        velocidade: 80,
        haki: 30
    }

];


function montaCartas () {
    //monta carta do player 1
    let nomeP1 = document.querySelector('#nomeP1');
    let figuraP1 = document.querySelector('#figuraP1')
    let forcaP1 = document.querySelector('#forcaP1');
    let hpP1 = document.querySelector('#hpP1');
    let resistenciaP1 = document.querySelector('#resistenciaP1');
    let velocidadeP1 = document.querySelector('#velocidadeP1');
    let hakiP1 = document.querySelector('#hakiP1');

    nomeP1.innerHTML = `${deckFull[0].nome}`;
    figuraP1.innerHTML = `${deckFull[0].figura}`;
    forcaP1.innerHTML = `${deckFull[0].forca}`;
    hpP1.innerHTML = `${deckFull[0].hp}`;
    resistenciaP1.innerHTML = `${deckFull[0].resistencia}`;
    velocidadeP1.innerHTML = `${deckFull[0].velocidade}`;
    hakiP1.innerHTML = `${deckFull[0].haki}`;

    //monta carta do player 2
    let nomeP2 = document.querySelector('#nomeP2');
    let figuraP2 = document.querySelector('#figuraP2');
    let forcaP2 = document.querySelector('#forcaP2');
    let hpP2 = document.querySelector('#hpP1');
    let resistenciaP2 = document.querySelector('#resistenciaP2');
    let velocidadeP2 = document.querySelector('#velocidadeP2');
    let hakiP2 = document.querySelector('#hakiP2');

    nomeP2.innerHTML = `${deckFull[1].nome}`;
    figuraP2.innerHTML = `${deckFull[1].figura}`
    forcaP2.innerHTML = `${deckFull[1].forca}`;
    hpP2.innerHTML = `${deckFull[1].hp}`;
    resistenciaP2.innerHTML = `${deckFull[1].resistencia}`;
    velocidadeP2.innerHTML = `${deckFull[1].velocidade}`;
    hakiP2.innerHTML = `${deckFull[1].haki}`;
};

montaCartas();