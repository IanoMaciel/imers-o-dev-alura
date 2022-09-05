var firstName = 'Iano';
var notas = [];
var total = 0;

for(var i=0; i<4; i++) {
    notas[i] = prompt(`Nota ${i}: `);
    total = total + parseFloat(notas[i]);
}

var notaFinal = total/notas.length;

console.log(firstName);
console.log(`Nota final: ${notaFinal.toFixed(2)}`);

