function calculate() {
    // Tipo de jogo
    const tipoJogo = document.getElementById("tipoJogo").value;

    // Valor do jogo
    const valorJogo = parseFloat(document.getElementById("valorJogo").value);

    // Verifica se o valor é positivo
    if (valorJogo < 0 || isNaN(valorJogo) || !isValidDecimal(valorJogo)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Calcula o total do jogo
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
    retorno = retorno.toFixed(2).replace(".",",");
    document.getElementById("retorno").innerText = `Retorno: R$ ${retorno}`;
}

function isValidDecimal(number) {
    const decimalCount = (number.toString().split('.')[1] || []).length;
    return decimalCount <= 2;
}