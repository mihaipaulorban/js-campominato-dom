// Variabili globali
let giocoPerso = false;
let bombe = [];
let punteggio = 0;
const start = document.querySelector('.start');
const selectDifficolta = document.querySelector('#difficolta');


// Variabile per tenere traccia dell'elemento del punteggio nel footer
const punteggioFooter = document.createElement('span');
const footer = document.querySelector('footer');
footer.appendChild(punteggioFooter);

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
    
            giocoPerso = true;

            punteggioFooter.textContent = `Il tuo Punteggio è di: ${punteggio}`;

            haiPerso();

            const celle = document.querySelectorAll('.cell');
            celle.forEach(cell => {
                cell.removeEventListener('click', handleClick);
            });
        } else {
            punteggioFooter.textContent = `Il tuo Punteggio è di: ${punteggio}`;
            this.classList.add(classNameAdd);
    
            this.removeEventListener('click', handleClick);
    
            punteggio++;
            console.log('Punteggio:', punteggio);

        }
    });

    return element;
}

function haiPerso() {
    const messaggioPerdita = document.querySelector('.messaggio');
    messaggioPerdita.textContent = 'Hai perso!';
    messaggioPerdita.classList.add('mostra-messaggio');
}

function haiVinto() {
    const messaggioVittoria = document.querySelector('.messaggio');
    messaggioVittoria.textContent = 'Hai vinto!';
    messaggioVittoria.classList.add('mostra-messaggio');
}

// Funzione che aggiorna il punteggio nel footer
function aggiornaPunteggio() {
    punteggioFooter.textContent = `Il tuo Punteggio è di: ${punteggio}`;
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

// Evento on click per la gameboard
start.addEventListener('click', function () {
    const board = document.querySelector('.gameboard');
    board.classList.add('show');
    board.classList.remove('hide');

    const difficoltaSelezionata = selectDifficolta.value;
    generaBombe(difficoltaSelezionata);

    punteggio = 0;
    aggiornaPunteggio();

    if (difficoltaSelezionata === 'facile') {
        generaFacile();
    } else if (difficoltaSelezionata === 'media') {
        generaMedia();
    } else if (difficoltaSelezionata === 'elevata') {
        generaDifficile();
    }

    // Controllo di vittoria
    const celle = document.querySelectorAll('.cell');
    celle.forEach(cell => {
        cell.addEventListener('click', function () {
            const celleScoperte = document.querySelectorAll('.clickcolor').length;
            if (celleScoperte === 100 - bombe.length) {
                
                haiVinto();
            }
        });
    });
});
