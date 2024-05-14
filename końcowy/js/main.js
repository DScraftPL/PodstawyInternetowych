function sprawdzPole(idelementu, iderror, regex){
  var elementRoboczy = document.getElementById(idelementu);
  var elementError = document.getElementById(iderror);
  var elementRegex = regex; 
  if(!elementRegex.test(elementRoboczy.value)){
    elementError.innerHTML = "Błąd";
    elementError.style.color = "red";
    return false;
  } else {
    elementError.innerHTML = "Jest zwalidowane!";
    elementError.style.color = "green";
  }
  return true;
}

function sprawdz(){
  var sprawdzenie = true;
  var idel = "emailaddress";
  var ider = "emailError";
  var regex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
  if(!sprawdzPole(idel,ider,regex)){
    sprawdzenie = false;
  }
  idel = "name";
  ider = "nameError";
  regex = /^[a-zA-Z]+/;
  if(!sprawdzPole(idel,ider,regex)){
    sprawdzenie = false;
  }
  idel = "password";
  ider = "passError";
  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  if(!sprawdzPole(idel,ider,regex)){
    sprawdzenie = false;
  }
  var element = document.getElementById("wyborselect");
  var elementerr = document.getElementById("selectError");
  if(element.value == 0){
    elementerr.innerHTML = "wybierz coś!";
    elementerr.style.color = "red";
    sprawdzenie = false;
  } else {
    elementerr.innerHTML = "";
    elementerr.style.color = "red";
  }
  element = document.getElementById("EULAcheck");
  elementerr = document.getElementById("EULAError");
  if(!element.checked){
    elementerr.innerHTML = "zaznacz to pole!";
    elementerr.style.color = "red";
    sprawdzenie = false;
  } else {
    elementerr.innerHTML = "";
  }
  return sprawdzenie;
}

function sprawdzwyslij(){
  if(sprawdz()){
    dane = "";
    profil = {};
    var dana = document.getElementById("emailaddress").value;
    profil.email = dana; 
    dane += dana + "\n" ;
    dana = document.getElementById("name").value;
    profil.name = dana;
    dane += dana + "\n";
    dana = document.getElementById("password").value;
    profil.password = dana;
    dane += dana + "\n";
    dana = document.getElementById("wyborselect").value;
    profil.wybor = dana;
    dane += dana + "\n";
    if(window.confirm(dane)){
      localStorage.setItem("user", JSON.stringify(profil));
    } 
  } else {
    window.alert("sprawdź formularz");
  }
}

function wyswietl(){
  for(let i=0; i<localStorage.length; i++){
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    var element = document.getElementById("user");
    for(let i=0; i<localStorage.length; i++){
      element.innerHTML += '<div>' + user.name + '<br>' + user.email + '</div>';
    }
  }
} 
