function Converter() {
    const dolar = 5.25;
    var valorDolar = document.getElementById('valor').value;
    var valorReal = parseFloat(valorDolar) * dolar;

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = `Resultado em real é R$ ${valorReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
}