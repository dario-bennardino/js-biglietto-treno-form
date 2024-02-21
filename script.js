// dichiaro le variabili che mi serviranno
let age;
let km;
let message;
let messageDiscount = '';
let price;
let finalPrice;

// dichiaro i dati di partenza
const priceXKm = 0.21;
const discountYoung = 20;
const discountSenior = 40;

km = parseInt(prompt('Quanti km devi percorrere?'));
// console.log(km);

age = parseInt(prompt('Quanti anni hai?'));
// console.log(age);

price = km * priceXKm;
finalPrice = price; 

//sezione sconti

if(age < 18){
    finalPrice *=1 - (discountYoung / 100);

    messageDiscount = 'Dal momento che sei minorennehai lo sconto del ${discountYoung}% e quindi pagherai solo €; ${finalPrice.toFixed(2)}'
}