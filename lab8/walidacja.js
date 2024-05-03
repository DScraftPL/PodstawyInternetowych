function sprawdzPole(pole_id,obiektRegex){
  var obiektPole = document.getElementById(pole_id);
  if(!obiektRegex.test(obiektPole.value)) return (false);
  else return (true);
}

function sprawdz_radio(nazwa_radio){
  var obiekt=document.getElementsByName(nazwa_radio);
  for (i=0;i<obiekt.length;i++){ 
    wybrany=obiekt[i].checked;
    if (wybrany) return true; 
  }
  return false;
}

function sprawdz_box(nazwa_radio){
  var obiekt=document.getElementsByName(nazwa_radio);
  for (i=0;i<obiekt.length;i++){ 
    wybrany=obiekt[i].checked;
    if (wybrany) return true;
  }  
  return false;
}

function sprawdz(){
  var czyOK = true;
  var dane = "";
  var obiektNazw = /^[a-zA-Z]{2,20}$/;
  var obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
  var obiektWiek=/^[1-9][0-9]{1,2}$/;
  var obiektTel=/^[0-9]{9}$/;
  if(!sprawdzPole("imie",obiektNazw)){
    czyOK=false;
    document.getElementById("errorI").innerHTML = "Wpisz poprawne imie!"; 
  } else {
    document.getElementById("errorI").innerHTML = "";
    dane += document.getElementById("imie").value + "\n";
  }
  if(!sprawdzPole("nazwisko", obiektNazw)){
    czyOK=false;
    document.getElementById("errorN").innerHTML = "Wpisz poprawne nazwisko"; 
  } else {
    document.getElementById("errorN").innerHTML = "";
    dane += document.getElementById("nazwisko").value + "\n";
  }
  if(!sprawdzPole("email", obiektemail)){
    document.getElementById("errorE").innerHTML = "Wpisz poprawny email"; 
    czyOK=false;
  } else {
    document.getElementById("errorE").innerHTML = "";
    dane += document.getElementById("email").value + "\n";
  }
  if(!sprawdzPole("telefon", obiektTel)){
    czyOK=false;
    document.getElementById("errorT").innerHTML = "Wpisz poprawny telefon"; 
  } else {
    document.getElementById("errorT").innerHTML = "";
    dane += document.getElementById("telefon").value + "\n";
  }
  if(!sprawdzPole("wiek", obiektWiek)){
    document.getElementById("errorW").innerHTML = "Wpisz poprawny wiek"; 
    czyOK=false;
  } else {
    document.getElementById("errorW").innerHTML = "";
    dane += document.getElementById("wiek").value + "\n";
  }
  if(sprawdz_box("dodatki")){
    document.getElementById("errorC").innerHTML = ""; 
    var temp = document.getElementsByName("dodatki");
    for(let i=0; i<temp.length; i++){
      if(temp[i].checked){
        dane += temp[i].value + " ";
      }
    }
    dane += "\n";
  } else {
    czyOK = false;
    document.getElementById("errorC").innerHTML = "Kliknij cos";
  }
  if(sprawdz_radio("rozmiar")){
    var temp = document.getElementsByName("rozmiar");
    for(let i=0; i<temp.length; i++){
      if(temp[i].checked){
        dane += temp[i].value + " ";
      }
    } 
    dane += "\n";
  } else {
    czyOK = false;
    document.getElementById("errorR").innerHTML = "Kliknij cos";
  }
  if(czyOK){
    window.confirm(dane);
  }
  return czyOK;
}


