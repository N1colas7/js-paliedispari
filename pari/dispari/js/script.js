//Chiedere all'utente di scegliere tra pari o dispari
let scelta = prompt("Paro o disparo?");
console.log(`L'utente sceglie ${scelta}`);
//Chiedere all'utente un numero da 1 a 5 ;
let num = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`L'utente sceglie ${num}`);
//Generiamo un numero random da 1 a 5 per il computer
function generateRandomNumbers(min, max) {
     let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
     return randomNumber;
}
let computer = generateRandomNumbers(1, 5);
console.log(`Il computer sceglie ${computer}`);

//Sommiamo i due numeri e stabiliamo chi ha vinto
function somma(num1,num2) {
    let i = num1 + num2 ;
    return i ;
}
let risultato = somma(num,computer)
console.log(`La somma è ${risultato}`);

function paro(num3) {
    let i = num3 % 2;
        if (i == 0) {
             i = "paro"
        }else{
            i = "disparo"
        }
        return i;
}
let verifica = paro(risultato);
console.log(`Il risultato è ${verifica}`);

if (scelta == "paro" & verifica == "paro" ){
    console.log("Hai vinto");
}else if(scelta == "disparo" & verifica == "disparo"){
    console.log("Hai vinto");
}else{
    console.log("Hai perso");
}
