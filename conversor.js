const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")/*Valor em real a ser convertido */
    const currencyValueConverted = document.querySelector(".currency-value")/*Valor convertido em outras moedas(dola/euro) */
    
    console.log(currencySelect.value)
    
    const dolarToday = 5.41
    const euroToday = 6.35

    
    /*Condicional a ser verificada na seleção de troca de moeda */

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday) /*Valor convertido em dólar*/
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday) /*Valor convertido em euro*/
    }

   

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) /*Valor que o usuário digita, para a conversão da moeda*/ 
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")/*Selecionando o parágrafo do nome da moeda */
    const currencyImage = document.querySelector(".currency-img")/*Selecionando a imagem da moeda */

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

currencySelect.addEventListener("change", changeCurrency)/*Adicionando um ouvinte de eventos */
convertButton.addEventListener("click", convertValues)/**Adicionando um ouvinte de eventos */


    /*currencyValueToConvert.innerHTML = inputCurrencyValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})*/
    /*currencyValue.innerHTML = convertedValue.toLocaleString("en-US", {style: "currency", currency: "USD"})*/

    /*console.log(convertedValue)*/