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
  '<p class="srodek"><img src="zdjecia/baner.jpg" alt="baner" /></p>'+
  '<article><h2>Wady SPA</h2><p>'+
  ' Czas wytworzenia oraz nakład pracy ... </p></article>';
  return tresc;
}



function pokazGalerie(){
  var tresc='<h2><br />Moja galeria</h2>';
  tresc+=' <div class="galeria">';
  for(i=1;i<=10;i++){
    tresc+='<div class="slajd"> <img src="zdjecia/obraz' + i + '.JPG" alt="obraz '+ i +'"/></div>';
  }
  return tresc+'</div>';
}
function pokazKontakt(){
  var tresc='<h2><br />Kontakt</h2>';
  tresc+= '<h1>Kacper Wiącek</h1>';
  tresc+= '<h1><a href="github.com/DScraftPL">Github!</a></h1>';
  return tresc;
}
function pokazPosttemp(){
  var tresc = "<h1>to jest post!</h1>";
  tresc+='<h1><form>Imie: <input type="text" id="imie"><br />Nazwisko: <input type="text" id="nazwisko"></h1>';
  tresc+='<h1>Email: <input type="email" id="email"></form>';
  tresc+='<h1><button onclick="pokazDane()">hello</button></h1>';
  return tresc;
}

function pokazPost()
{
  tresc='<h2><br />Dodaj post</h2>';
  tresc+='<article class="srodek" ><form action="mailto:a@a.pl" method="post" onsubmit="return pokazDane();">'+'Twój email:<input type="email" name="email" id="email" required /><br />'+'Imie: <input type="text" id="imie"><br />Nazwisko: <input type="text" id="nazwisko"> <br />Komentarz: <br /> <textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'
  tresc+='<br>Wiek:<br><input type="radio" name="wiek" value="1">0-10<input type="radio" name="wiek" value="2">11-20<input type="radio" name="wiek" value="3">21-30<input type="radio" name="wiek" value="4">31-40<input type="radio" name="wiek" value="5">41-50<br>'
  tresc+='Zainteresowania:<br>' + '<input type="checkbox" name="zainteresowania" value="1"> Komputery' + '<input type="checkbox" name="zainteresowania" value="2"> Gry' + '<br /> <input type="submit" name="wyslij" value="Wyślij" />' +'</form></article>' 
;
  return tresc;
}

function pokazDane(){
  var dane="Następujące dane zostaną wysłane:\n";
  dane+="Imie:" + document.getElementById('imie').value+"\n";
  dane+="Nazwisko:" + document.getElementById('nazwisko').value+"\n";
  dane+="Email: "+document.getElementById('email').value+"\n";
  var radio = document.getElementsByName('wiek');
  for(let i=0; i<radio.length; i++){
    if(radio[i].checked){
      dane+="Wiek: " + radio[i].value+"\n";
      break;
    }
  }
  var checkbox = document.getElementsByName('zainteresowania');
  for(let i=0; i<checkbox.length; i++){
    if(checkbox[i].checked){
      dane+="Zainteresowania: " + checkbox[i].value+"\n";
    }
  }
  dane+="Komentarz: "+document.getElementById('wiadomosc').value+"\n";
  if (window.confirm(dane)){ 
    return true;
  } else {
    return false
  };
}
