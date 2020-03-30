var parola;
var paroladivisa;
var parolainv;

//input utente
parola = prompt("Inserisci una parola");

//inversione parola inserita
paroladivisa = parola.split("");
parolaarray = paroladivisa.reverse();
parolainv = parolaarray.join("")
console.log(parolainv);

//confronto con parola iniziale
if(parolainv == parola){ //Nel caso in cui è uguale
  document.getElementById("tit").innerHTML = "La parola " + parola + " è palindroma"
}
else{ //Nel caso in cui è diverso
  document.getElementById("tit").innerHTML = "La parola " + parola + " non è palindroma"
}
