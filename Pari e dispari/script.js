var utente, pc;
var numero , max , mix;
var somma;
var risultato , fine;
utente = prompt("scegli tra pari o dispari");

//Funzione numero randomico
function random() {
  min = Math.ceil(0);
  max = Math.floor(6);
  numero = Math.floor(Math.random() * (max - min)) + min;
}

//Assegnazione numero random a utente
random();
utentenum = parseInt(numero);

//Assegnazione numero random a pc
random();
pc = parseInt(numero);

//Somma tra i due numeri
somma = utentenum + pc;

//Verifica pari - dispari
risultato = (somma % 2);
if(risultato > 0){
  fine = "dispari";
}
else{
  fine = "pari";
}

//Verifica del vincitore
if(utente === fine){
  document.getElementById("tit").innerHTML = "Congratulazioni hai vinto.<br>La somma dei due numeri è " + somma;
}
else{
  document.getElementById("tit").innerHTML = "Mi dispiace hai perso.<br>La somma dei due numeri è " + somma;
}
