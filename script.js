// FUNZIONI

// Funzione che genera gli elementi con la possibilità di cambiare tag, contenuto o classe
function createElement(tag, content, className, classNameAdd) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    element.addEventListener('click', function handleClick() {
        if (giocoPerso) return;
        
        const numeroCliccato = parseInt(this.textContent);
        if (bombe.includes(numeroCliccato)) {
            this.style.backgroundColor = 'red';
            console.log('Hai perso!');
    
            // Imposta il flag per indicare la perdita
            giocoPerso = true;
    
            // Disabilita gli eventi di click su tutte le celle dopo aver perso
            const celle = document.querySelectorAll('.cell');
            celle.forEach(cell => {
                cell.removeEventListener('click', handleClick);
            });
        } else {
            this.classList.add(classNameAdd);
    
            // Rimuove l'evento click dopo il primo click
            this.removeEventListener('click', handleClick);
    
            punteggio++;
            console.log('Punteggio:', punteggio);
        }
    });

    return element;
}

// Funzione che accetta come parametro la difficoltà scelta per generare un numero di bombe in base alla difficoltá
function generaBombe(difficolta) {
    let maxNumber;
    if (difficolta === 'facile') {
        maxNumber = 100;
    } else if (difficolta === 'media') {
        maxNumber = 81;
    } else if (difficolta === 'elevata') {
        maxNumber = 49;
    }

    bombe = [];
    while (bombe.length < 16) {
        const numeroCasuale = Math.floor(Math.random() * maxNumber) + 1;
        if (!bombe.includes(numeroCasuale)) {
            bombe.push(numeroCasuale);
        }
    }
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

// Variabili globali
let giocoPerso = false;
let bombe = [];
let punteggio = 0;
const start = document.querySelector('.start');
const selectDifficolta = document.querySelector('#difficolta');


// Evento on click per la gameboard
start.addEventListener('click', function () {
    const board = document.querySelector('.gameboard');
    board.classList.add('show');
    board.classList.remove('hide');

    const difficoltaSelezionata = selectDifficolta.value;
    generaBombe(difficoltaSelezionata);

    // Reimposta il punteggio 
    punteggio = 0;

    if (difficoltaSelezionata === 'facile') {
        generaFacile();
    } else if (difficoltaSelezionata === 'media') {
        generaMedia();
    } else if (difficoltaSelezionata === 'elevata') {
        generaDifficile();
    }
});