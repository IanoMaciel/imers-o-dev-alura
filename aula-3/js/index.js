var secretNumber = Math.floor(Math.random() * 10+1); // com o parseInt fica inteiro tbm
var attempts = 10; // tentativas

console.log(secretNumber); // retirar mais tarde 

function Chutar() {    
    var valueInput = document.getElementById('valor').value; // recupera o valor do input
    var result = document.getElementById('resultado'); 
    
    // erro message
    var erroInput = 'você deverá digitar valores entre 0 e 10';
    var erroAttemps = 'Você Perdeu! :(';
    var win = 'Você acertou, meus parabéns!';

    parseInt(secretNumber) // string para int
    
    if (valueInput < 0 || valueInput > 10) { // valida a entrada no intervalor de [0,10]
        alert(erroInput);
        valueInput = document.getElementById('valor').value = '' // clear input
    } else if(secretNumber == valueInput) {
        result.innerHTML = win;
    } else if(secretNumber != valueInput) {
        attempts--; // decrementa o contator;
        
        if(attempts == 0) {
            result.innerHTML = erroAttemps;
            return false;
        } 

        alert(`Você possui mais ${attempts} tentativas`);
        valueInput = document.getElementById('valor').value = '' // clear input
        
    }
}