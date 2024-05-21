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
    let indeks = 0;
    console.log(localStorage.getItem("user" + indeks));
    while(localStorage.getItem("user" + indeks) != null){
      console.log(localStorage.getItem("user" + indeks));
      indeks += 1;
    }
    dane = "";
    profil = {};
    var dana = document.getElementById("emailaddress").value;
    profil.email = dana; 
    dane += "email: " + dana + "\n" ;
    dana = document.getElementById("name").value;
    profil.name = dana;
    dane += "imie i nazwisko: " + dana + "\n";
    dana = document.getElementById("password").value;
    profil.password = dana;
    dane += "haslo: " + dana + "\n";
    dana = document.getElementById("wyborselect").value;
    profil.wybor = dana;
    dane += "wybor: " + dana + "\n";
    var radios = document.getElementsByName("radioInput");
    for(let i=0; i<radios.length; i++){
      if(radios[i].checked){
        profil.radio = i;
        dane += "radio" + i + "\n";
      }
    }
    if(window.confirm(dane)){
      localStorage.setItem("user"+indeks, JSON.stringify(profil));
    } 
  } else {
    window.alert("sprawdź formularz");
  }
}

function wyswietl(){
  var wewHTML = '<h3 class="mt-2 text-center">Zapisani użytkownicy!</h3>' + '<div class="row">';
  var found = 0; 
  var i = 0;
  console.log(localStorage.length)
  if(localStorage.length == 0){
    wewHTML = '<h3 class="mt-2 text-center">Nikt się nie zapisał ;( </h3>';
  }
  while(found < localStorage.length){
    console.log(found);
    if(localStorage.getItem("user"+i) != null){
      found += 1;
      var user = JSON.parse(localStorage.getItem("user" + i));
      wewHTML += '<div class="col-12 col-md-6 col-xl-3 border border-2 text-center">' + user.name + '<br>' + user.email + '<div class="row"><div class="col-6"><button type="button" class="btn btn-info" onclick="modyfikuj(' + i + ')">Modyfikuj</button></div><div class="col-6"><button type="button" class="btn btn-info" onclick="usun('+ i +')">Usuń</button></div></div>' + '</div>';
    }
    i+=1;
  }
  wewHTML += '</div>';
  console.log(wewHTML);
  var element = document.getElementById("users");
  element.innerHTML = wewHTML;
}

function modyfikuj(id){
  var user = JSON.parse(localStorage.getItem("user" + id));
  document.getElementById("name").value = user.name;
  document.getElementById("emailaddress").value = user.email;
  document.getElementById("password").value = user.password;
  document.getElementById("wyborselect").value = user.wybor;
  document.getElementById("EULAcheck").checked = true;
  var radios = document.getElementsByName("radioInput");
  radios[user.radio].checked = true;
}

function usun(id){
  localStorage.removeItem("user" + id);
  wyswietl();
}

async function fetchowanie(){
  var response = await fetch("http://127.0.0.1:3000/").then( response => response.json()).then( dane => console.log(dane));
  
}
