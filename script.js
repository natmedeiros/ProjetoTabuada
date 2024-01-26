function montarTabuada() {
    let valor1 = document.querySelector("input#valor")
    let oper = document.querySelector("select#operadores")
    let res = document.querySelector("div#resultado")
    let mais = document.querySelector("option#som")
    let menos = document.querySelector("option#sub")
    let multiplicar = document.querySelector("option#mult")
    let dividir = document.querySelector("option#div")
    let valorIn = parseInt(valor1.value)

    res.innerHTML = 'Resultado: </br>'

    // Mensagem de ERRO
    if (valor1.value.length == 0) {
        alert("[ERRO] Digite um número!")
        return {}
    }

    // Mensagem de ERRO
    if (oper.value == 'vazio') {
        alert("[ERRO] Escolha um operador!")
        return {}
    }

    
    for (valorFn = 1; valorFn >= 1 && valorFn <= 10; valorFn++) {
        
        // Calculando SOMA
        if (oper.value == "+") {
            let soma = valorIn + valorFn    
            res.innerHTML += `${valorIn} ${mais.value} ${valorFn} = ${soma} </br>`
        }

        // Calculando SUBTRAÇÃO
        else if (oper.value == "-") {
            let subtracao = valorIn - valorFn
            res.innerHTML += `${valorIn} ${menos.value} ${valorFn} = ${subtracao} </br>`
        }

        // Calculando MULTIPLICAÇÃO
        else if (oper.value == "x") {
            let multiplicacao = valorIn * valorFn
            res.innerHTML +=  `${valorIn} ${multiplicar.value} ${valorFn} = ${multiplicacao} </br>`
        }

        // Calculando DIVISÃO
        else {
            let dividisao = valorIn / valorFn
            res.innerHTML += `${valorIn} ${dividir.value} ${valorFn} = ${dividisao} </br>`
        }
    }
}