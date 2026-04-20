function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Digite valores válidos!";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        cor = "orange";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        cor = "green";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        cor = "darkorange";
    } else {
        classificacao = "Obesidade";
        cor = "red";
    }

    resultado.innerHTML = `IMC: ${imc.toFixed(2)} <br> ${classificacao}`;
    resultado.style.color = cor;
}