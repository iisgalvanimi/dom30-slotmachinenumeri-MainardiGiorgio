var arrayNumeri = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
document.getElementById('d0').innerHTML = arrayNumeri[0];
document.getElementById('d1').innerHTML = arrayNumeri[0];
document.getElementById("btnStart").addEventListener("click", tentativo);

function tentativo(){
 document.getElementById("btnStart").disabled = true;

 var stopper = numeriTentativi(3,12);

  var s1 = 0;

  slot1 = setInterval(function(){
    numeroRandom = generaRandom(arrayNumeri.length);
    document.getElementById("d0").innerHTML = arrayNumeri[numeroRandom];
    console.log(arrayNumeri[numeroRandom]);
    s1++;
    if (s1 == stopper) {
      clearInterval(slot1);
      return null;
    }
  }, 100);

  var s2= 0;

  slot2 = setInterval(function(){
    s2++;
    if (s2 == stopper) {
      clearInterval(slot2);
      risultato();
      document.getElementById("btnStart").disabled = false;
      return null;
      
    }
    numeroRandom = generaRandom(arrayNumeri.length);
    document.getElementById("d1").innerHTML = arrayNumeri[numeroRandom];
    console.log(arrayNumeri[numeroRandom]);
  }, 100);

  

  function risultato() {
    var slot1 = document.getElementById("d0").innerHTML;
    var slot2 = document.getElementById("d1").innerHTML;
    console.log(document.getElementById("d0").innerHTML);
    if (slot1 == slot2){
      document.getElementById("message").innerHTML = 'HAI VINTO';
    } else {
      document.getElementById("message").innerHTML = 'HAI PERSO';
    }
  }
}


function generaRandom(max){
	return Math.floor((Math.random() *  max));
}

function numeriTentativi(min, max){
	return Math.floor((Math.random() * (max-min + 1)) + min);
}
