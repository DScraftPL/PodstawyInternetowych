function pokaz(id){
  var tresc="";
  switch (id){
    case 2: tresc += pokazGalerie();break;
    case 3: tresc += pokazPost(); break;
    case 4: tresc += pokazKontakt();break;
    default: tresc += pokazO();
  }
  document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
  var tresc ='<h2><br />Pierwsze kroki</h2> ';
  tresc += '<p> W aplikacjach typu SPA ......</p>'+
  '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>'+
  '<article><h2>Wady SPA</h2><p>'+
  ' Czas wytworzenia oraz nakład pracy ... </p></article>';
  return tresc;
}
function pokazGalerie(){
  var tresc='<h2><br />Moja galeria</h2>';
  tresc+=' <div class="galeria">';
  for(i=1;i<=10;i++){
    tresc+='<div class="slajd"> <img src="zdjecia/obraz' + i + '.jpg"/></div>';
  }
  return tresc+'</div>';
}
function pokazKontakt(){
  var tresc='<h2><br />Kontakt</h2>';
  tresc+= '<h1>Kacper Wiącek</h1>';
  tresc+= '<h1><a href="github.com/DScraftPL">Github!</a></h1>';
  return tresc;
}
function pokazPost(){
  var tresc = "<h1>to jest post!</h1>";
  tresc+='<h1><form>Imie: <input type="text" id="imie"><br />Nazwisko: <input type="text" id="nazwisko"></h1>';
  tresc+='<h1>Email: <input type="email" id="email"></form>';
  tresc+='<h1><button onclick="pokazDane()"></h1>';
  return tresc;
}

function pokazDane(){
  var dane="Następujące dane zostaną wysłane:\n";
  dane+="Imie:" + document.getElementById('imie').value+"\n";
  dane+="Nazwisko:" + document.getElementById('nazwisko').value+"\n";
  dane+="Email: "+document.getElementById('email').value+"\n";
  if (window.confirm(dane)){ 
    return true;
  } else {
    return false
  };
}
