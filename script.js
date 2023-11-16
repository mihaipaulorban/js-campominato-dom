// FUNZIONI

// Funzione che crea degli elementi con possibilità di cambiare tag contenuto o classe
function createElement(tag, content, className, classNameAdd) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    // Event listener che aggiunge un evento click a ogni div creato
    element.addEventListener('click', function () {
        console.log(this.textContent);

        // Aggiunge una classe agli elementi cliccati
        this.classList.add(classNameAdd);
    });

    return element;
}

function generaBombe(difficolta) {
    let maxNumber;
    if (difficolta === 'facile') {
        maxNumber = 100;
    } else if (difficolta === 'media') {
        maxNumber = 81;
    } else if (difficolta === 'elevata') {
        maxNumber = 49;
    }

    const bombe = [];
    while (bombe.length < 16) {
        const numeroCasuale = Math.floor(Math.random() * maxNumber) + 1;
        if (!bombe.includes(numeroCasuale)) {
            bombe.push(numeroCasuale);
        }
    }

    return bombe;
}

// Funzione che genera 100 celle (difficoltá facile)
function generaFacile() {
    const board = document.querySelector('.gameboard');
    board.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const myElement = createElement('div', i, 'cell', 'clickcolor');
        myElement.classList.add('dimCelleFacile');
        board.append(myElement);
    }
}

// Funzione che genera 81 celle (difficoltá media)
function generaMedia() {
    const board = document.querySelector('.gameboard');
    board.innerHTML = '';

    for (let i = 1; i <= 81; i++) {
        const myElement = createElement('div', i, 'cell', 'clickcolor');
        myElement.classList.add('dimCelleMedia');
        board.append(myElement);
    }
}

// Funzione che genera 49 celle (difficoltá difficile)
function generaDifficile() {
    const board = document.querySelector('.gameboard');
    board.innerHTML = '';

    for (let i = 1; i <= 49; i++) {
        const myElement = createElement('div', i, 'cell', 'clickcolor');
        myElement.classList.add('dimCelleDifficile');
        board.append(myElement);
    }
}

// PROGRAMMA

// variabili globali

const start = document.querySelector('.start');
const selectDifficolta = document.querySelector('#difficolta');


// Evento on click per la gameboard
start.addEventListener('click', function () {
    // Leva la classe hide e aggiunge la classe show
    const board = document.querySelector('.gameboard');
    board.classList.add('show');
    board.classList.remove('hide');
});

// evento per il cambio di difficoltá con il select
selectDifficolta.addEventListener('change', function () {

    const difficoltaSelezionata = selectDifficolta.value;

    if (difficoltaSelezionata === 'facile') {
        generaFacile();
    } else if (difficoltaSelezionata === 'media') {
        generaMedia();
    } else if (difficoltaSelezionata === 'elevata') {
        generaDifficile();
    }
});
