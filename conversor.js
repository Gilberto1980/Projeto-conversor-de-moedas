const convertButton = document.querySelector(".convert-button")   /*Selecionando o botão de converter */
const currencySelect = document.querySelector(".currency-select") /*Selecionando o select de moedas */

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value   /*Valor digitado pelo usuário */
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")/*Valor em real a ser convertido */
    const currencyValueConverted = document.querySelector(".currency-value")/*Valor convertido em outras moedas(dola/euro) */
    
    console.log(currencySelect.value)  /*Verificando o valor selecionado no select */ 
    
    const dolarToday = 5.42 //Valor do dólar hoje
    const euroToday = 6.36 //Valor do euro hoje

    
    /*Condicional a ser verificada na seleção de troca de moeda */

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  /*Formatando o valor para moeda dólar */
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday) /*Valor convertido em dólar*/
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {  /*Formatando o valor para moeda euro */
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday) /*Valor convertido em euro*/
    }

   

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {  /*Formatando o valor para moeda real */ 
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) /*Valor que o usuário digita, para a conversão da moeda*/ 
}

function changeCurrency() {  /*Função para trocar a moeda */
    const currencyName = document.getElementById("currency-name")  /*Selecionando o parágrafo do nome da moeda */
    const currencyImage = document.querySelector(".currency-img")  /*Selecionando a imagem da moeda */

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano" /*Alterando o nome da moeda */
        currencyImage.src = "./assets/Dolar.png" /*Alterando a imagem da moeda */
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro" /*Alterando o nome da moeda */
        currencyImage.src = "./assets/Euro.png" /*Alterando a imagem da moeda */
    }

    convertValues() /*Chamando a função para converter os valores automaticamente ao trocar a moeda */
}

currencySelect.addEventListener("change", changeCurrency)   /*Adicionando um ouvinte de eventos */
convertButton.addEventListener("click", convertValues    )  /*Adicionando um ouvinte de eventos */


    /*currencyValueToConvert.innerHTML = inputCurrencyValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})*/ /*Outro método para formatar a moeda */
    /*currencyValue.innerHTML = convertedValue.toLocaleString("en-US", {style: "currency", currency: "USD"})*/

    /*console.log(convertedValue)*/