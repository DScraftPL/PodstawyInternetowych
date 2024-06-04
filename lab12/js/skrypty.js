//utworzenie obiektu xhr:
const xhr = new XMLHttpRequest();
function pobierzDane(nazwaPliku) {
  if (xhr) {
    var url = "http://localhost/dane/" + nazwaPliku + ".txt";
    xhr.open("GET", url);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState === 4) {
        document.getElementById("s1").innerHTML = xhr.responseText;
      }
    });
    xhr.send(null);
  }
}

//Skrypt z Fetch API
//sprawdź czy DOM został załadowany:
/*document.addEventListener("DOMContentLoaded", function() {
  //obsługa zdarzenia kliknięcia na b1:
  var but1 = document.getElementById("b1");
  but1.addEventListener('click', function() {
    fetch("http://localhost/testajax/dane/info.txt")
      .then(response => { return response.text(); })
      .then(dane => { document.getElementById("s1").innerHTML = dane; })
  },
    false);

  //obsługa zdarzenia kliknięcia na b2:
  var but2 = document.getElementById("b2");
  but2.addEventListener('click', function() {
    fetch("http://localhost/testajax/dane/act.txt")
      .then(response => { return response.text(); })
      .then(dane => { document.getElementById("s1").innerHTML = dane; })
  },
    false);
  //obsługa pozostałych zdarzeń:
  //uzupełnij
})*/
