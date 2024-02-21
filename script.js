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


price = km * priceXKm;
finalPrice = price; 

document.getElementById('btnGenera').addEventListener('click', function() { 
  km = parseInt(document.getElementById('km').value);
  age = document.getElementById('age').value;
  fullname = document.getElementById('fullname').value;
  price = km * priceXKm;
  finalPrice = price; 
  console.log(price);

  if(age < 18){
    finalPrice *= 1 - (discountYoung / 100);
  } else if(age > 65){
    finalPrice *= 1 - (discountSenior / 100);
  }
  
  console.log('Prezzo biglietto:', finalPrice.toFixed(2));


});