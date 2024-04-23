function pokaz(id){
  var tresc="";
  switch (id){
    case 2: tresc += pokazGalerie();break;
    case 3: tresc += pokazPost(); break;
    case 4: tresc += pokazKontakt();break;
    default: tresc += pokazO();
  }
  //pobierz element o wskazanym id i ustaw jego nową zawartość:
  document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
  var tresc ='<h2><br />Pierwsze kroki</h2> ';
  //operator += uzupełnia łańcuch kolejną porcją znaków:
  tresc += '<p> W aplikacjach typu SPA ......</p>'+
  '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>'+
  '<article><h2>Wady SPA</h2><p>'+
  ' Czas wytworzenia oraz nakład pracy ... </p></article>';
  //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
  return tresc;
}
function pokazGalerie(){
  var tresc='<h2><br />Moja galeria</h2>';
  tresc+=' <div class="galeria">';
  //wygeneruj kod HTML z obrazami za pomocą pętli for:
  for(i=1;i<=10;i++){
    tresc+='<div class="slajd"> <img ... /></div>';
  }
  return tresc+'</div>';
}
function pokazKontakt(){
  var tresc='<h2><br />Kontakt</h2>';
  //uzupełnij treść:
  // tresc+= ...
  return tresc;
}
function pokazPost(){
  var tresc = "<h1>to jest post!</h1>"
  return tresc;
}

function pokazDane(){
  //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
  //typu confirm do zatwierdzenia przez użytkownika:
  var dane="Następujące dane zostaną wysłane:\n";
  dane+="Email: "+document.getElementById('email').value+"\n";
  // uzupełnij dane ...
  if (window.confirm(dane)){ 
    return true;
  } else {
    return false
  };
}
