# Campo Minato Gioco Funzionante

L'esercizio é il continuo dell'esercizio sulla crezione della griglia.

Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il gioco
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
:esclamazione:Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Per iniziare ho copiato il codice fatto nell'esercizio precedente.

## Logica del gioco

Faccio in modo che il programma generi 16 numeri casuali, che poi rappresenteranno le bombe.

- creo una funznione che genera i numeri casuali all'interno di array in base alla difficoltá, quindi se la difficoltá é quella facile e ci sono 100 caselle, i 16 numeri andranno da 1 a 100, per la difficoltá media da 1 a 81 e per quella difficile da 1 a 49.
- L'array bombe non puó generare due numeri duplicati, in una casella ci puó essere solo un numero
- con un altra funznione faccio in modo che le caselle che contengono i numeri che sono stati generati siano 'bombe'e quando l'utente clicca il programma riconosce che quel numero fa parte dell'array bomba e finisce il gioco; non posso piú cliccare nulla, oltretutto sopra alla gameboard deve apparire il messaggio Hai Perso
- faccio in modo poi che le caselle bomba quando cliccate diventano rosse utilizzando delle semplici classi css

Poi penso al conteggio dei punti facendo in modo che ad ogni casella che non é 'bomba'mi aggiunga punti.

- Aggiungo un contatore di click per ogni interazione che ho con le cell all'interno della gameboard.
- Il contatore lo limito solo alle celle che non sono bomba, quando clicco su una cella bomba il contatore si ferma.
- aggiungo nella parte centrale del footer il contatore che rappresenterá il punteggio
