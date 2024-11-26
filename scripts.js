const convertButton = document.querySelector(".convert-button")
const currencySelectOut = document.querySelector(".currency-select-out")

function convertValues (){
    const inputCaurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.9
    const euroToday = 6.5
    const libraToday = 7.3
    const biticoinToday = 527

    if(currencySelectOut.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCaurrencyValue / dolarToday)
    }

    if(currencySelectOut.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCaurrencyValue / euroToday)
    }

    if(currencySelectOut.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCaurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCaurrencyValue)
    
}

function changeCurrency (){
    const currencyNameOut = document.querySelector (".currency-name-out")
    const currencyImgOut = document.querySelector (".currency-img-out")

    if(currencySelectOut.value == "dolar"){
        currencyNameOut.innerHTML = "Dólar Americano"
        currencyImgOut.src = "./assets/dolar.png"
    }
   
    if(currencySelectOut.value == "euro"){
        currencyNameOut.innerHTML = "Euro"
        currencyImgOut.src = "./assets/euro.png"
    }
    
    if(currencySelectOut.value == "libra"){
        currencyNameOut.innerHTML = "Libra"
        currencyImgOut.src = "./assets/libra.png"
    }

    convertValues ()

}



currencySelectOut.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)

