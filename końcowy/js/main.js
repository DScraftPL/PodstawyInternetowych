function sprawdz(){
  window.alert("działa");
  var elementRoboczy = document.getElementById("emailaddress");
  var elementError = document.getElementById("emailError");
  if(elementRoboczy.value != null){
    elementError.innerHTML = "";
  } else {
    elementError.innerHTML = "Error";
  }
}

function wyswietl(){

} 
