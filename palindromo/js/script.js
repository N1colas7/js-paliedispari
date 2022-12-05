let parola = prompt("Inserisci una parola")

let parolainversa = invertiparola(parola)

if(parola == parolainversa){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
}

function invertiparola(str) {
    let strInversa = str.split('').reverse().join('');  
    return strInversa;
}