/*
Data una lista della spesa:
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
*/

// Esercizio svolto con ciclo for
const listFor = ['Latte', 'Cacao', 'Insalata', 'Carote', 'Pomodori', 'Piatti pronti'];
for (let i = 0; i < listFor.length; i++) {
    const thisItemFor = listFor[i];
    document.querySelector('#list-for').innerHTML += `<li>${thisItemFor}</li>`;
}

// Esercizio svolto con ciclo while
const listWhile = ['Latte', 'Cacao', 'Insalata', 'Carote', 'Pomodori', 'Piatti pronti'];
let i = 0;
while (i < listWhile.length) {
    let thisItemWhile = listWhile[i];
    document.querySelector('#list-while').innerHTML += `<li>${thisItemWhile}</li>`;
    i++;
}