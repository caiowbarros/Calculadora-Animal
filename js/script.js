function calculate() {
    // Tipo de jogo
    const tipoJogo = document.getElementById("tipoJogo").value;

    // Valor do jogo
    const valorJogo = parseFloat(document.getElementById("valorJogo").value.replace(/[^\d,]/g, '').replace(',', '.'));

    // Verifica se o valor é positivo
    if (valorJogo < 0 || isNaN(valorJogo) || !isValidDecimal(valorJogo)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Calcula o retorno do jogo
    let retorno;
    switch (tipoJogo) {
        case "grupo":
            retorno = valorJogo * 18;
            break;
        case "dezena":
            retorno = valorJogo * 60;
            break;
        case "centena":
            retorno = valorJogo * 600;
            break;
        case "milhar":
            retorno = valorJogo * 4000;
            break;
        case "milharCentena":
            retorno = valorJogo * 2300;
            break;
        case "duqueDezena":
            retorno = valorJogo * 300;
            break;
        case "duqueGrupo":
            retorno = valorJogo * 18.75;
            break;
        case "ternoDezena":
            retorno = valorJogo * 3000;
            break;
        case "ternoGrupo":
            retorno = valorJogo * 130;
            break;
        default:
            retorno = "Tipo de jogo inválido";
    }

    // Mostra o retorno do jogo
    document.getElementById("retorno").innerText = `Retorno: ${formatAsCurrency(retorno)}`;
}

function isValidDecimal(number) {
    // Verifica se o valor do jogo possui no máximo duas casas decimais
    const decimalCount = (number.toString().split('.')[1] || []).length;
    return decimalCount <= 2;
}

function formatCurrency() {
    // Valor do jogo
    const inputElement = document.getElementById("valorJogo");
    let value = inputElement.value;

    // Se o valor inserido for vazio, o valor é setado como "0,00"
    if (!value.trim()) {
        inputElement.value = "R$0,00";
        return;
    }

    // Remove os caracteres não numéricos (exceto vírgula para as casas decimais)
    value = value.replace(/[^\d,]/g, '');

    // Formata o valor como moeda
    inputElement.value = formatAsCurrency(parseFloat(value.replace(',', '.')));
}

function formatAsCurrency(amount) {
    // Formata um número como moeda (BRL)
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
}