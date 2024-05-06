function sprawdz(){
  window.alert("działa");
  var elementRoboczy = document.getElementById("emailaddress");
  var elementError = document.getElementById("emailError");
  var elementRegex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
  if(!elementRegex.test(elementRoboczy.value)){
    elementError.innerHTML = "Error2";
  } else {
    elementError.innerHTML = "Error";
  }
  window.alert("sprawdz");
}

function wyswietl(){

} 
