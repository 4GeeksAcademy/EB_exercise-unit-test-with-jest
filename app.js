// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b; 
}

// Solo un registro en consola para nosotros
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
function fromDollarToYen(dollars){
    const euros = dollars / 1.07;
    const yen = euros * 156.5;
    return yen
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra cl
  module.exports = { sum, fromEuroToDollar, fromDollarToYen};