function zapisz(){
    var obiekcik = {};  
    obiekcik.cena = document.getElementById("cena").value;
    obiekcik.kolor = document.getElementById("kolor").value;
    obiekcik.liczba = document.getElementById("liczba").value;
    console.log(obiekcik)
    localStorage.setItem(document.getElementById("nazwa").value, JSON.stringify(obiekcik));
}
function wyswietl(){
    var koszyczek = document.getElementById("divkoszyka");
    if(localStorage.length>0){
        var wewhtmlkoszyczka = "<table><tr><th>Nazwa</th><th>cena</th><th>kolor</th><th>liczba</th><th>modyfikuj</th><th>usuwaj</th></tr>";
        for(let i=0; i<localStorage.length; i++){
            var obiekcik = JSON.parse(localStorage.getItem(localStorage.key(i)));
            wewhtmlkoszyczka += "<tr>" +
            "<td>" + localStorage.key(i) + "</td>" +
            "<td>" + obiekcik.cena + "</td>" +
            "<td>" + obiekcik.kolor + "</td>" +
            "<td>" + obiekcik.liczba + "</td>" +
            "<td>" + '<button type="button" onclick="modyfikuj('+ i +')">moduj</button>' + "</td>" +
            "<td>" + '<button type="button" onclick="usunel('+ i +')">usun</button>' + "</td>" + 
            "</tr>";
        }
        wewhtmlkoszyczka += "</table>"
        koszyczek.innerHTML = wewhtmlkoszyczka;
    } else {
        koszyczek.innerHTML = "Koszyk jest pusty!";
    }
}
function zapiszalelista(){
    var obiekcik = {};  
    obiekcik.cena = document.getElementById("cena").value;
    obiekcik.kolor = document.getElementById("kolor").value;
    obiekcik.liczba = document.getElementById("liczba").value;
    console.log(obiekcik)
    var lista = JSON.parse(localStorage.getItem('lista'));
    if(lista === null){
        lista = [];
    }
    lista.push(obiekcik);
    localStorage.setItem("lista", JSON.stringify(lista));
    console.log(lista);
}
function wyswietlalelista(){
    var koszyczek = JSON.parse(localStorage.getItem('lista'));
    if(koszyczek===null){
        document.getElementById("divkoszyka").innerHTML = "Koszyk jest pusty!";
    } else { 
        var wewhtmlkoszyczka = "<table><tr><th>Nazwa</th><th>cena</th><th>kolor</th><th>liczba</th><th>modyfikuj</th><th>usuwaj</th></tr>";
        for(let i=0; i<koszyczek.length; i++){
            var obiekcik = koszyczek[i];
            wewhtmlkoszyczka += "<tr>" +
            "<td>" + localStorage.key(i) + "</td>" +
            "<td>" + obiekcik.cena + "</td>" +
            "<td>" + obiekcik.kolor + "</td>" +
            "<td>" + obiekcik.liczba + "</td>" +
            "<td>" + '<button type="button" onclick="modyfikuj('+ i +')">moduj</button>' + "</td>" +
            "<td>" + '<button type="button" onclick="usunel('+ i +')">usun</button>' + "</td>" + 
            "</tr>";
        }
        wewhtmlkoszyczka += "</table>"
        document.getElementById("divkoszyka").innerHTML = wewhtmlkoszyczka;
    }
}
function wyszukuj(){
    var found = true;
    for(let i=0; i<localStorage.length; i++){
        if(document.getElementById("wyszukaj").value === localStorage.key(i)){
            if(found){
                var wewhtmlkoszyczka = "<table><tr><th>Nazwa</th><th>cena</th><th>kolor</th><th>liczba</th><th>modyfikuj</th><th>usuwaj</th></tr>";
                found = false;
            }
            var obiekcik = JSON.parse(localStorage.getItem(localStorage.key(i)));
            wewhtmlkoszyczka += "<tr>" +
            "<td>" + localStorage.key(i) + "</td>" +
            "<td>" + obiekcik.cena + "</td>" +
            "<td>" + obiekcik.kolor + "</td>" +
            "<td>" + obiekcik.liczba + "</td>" +
            "<td>" + '<button type="button" onclick="modyfikuj('+ i +')">moduj</button>' + "</td>" +
            "<td>" + '<button type="button" onclick="usunel('+ i +')">usun</button>' + "</td>" + 
            "</tr>";
        }
        wewhtmlkoszyczka += "</table>"
    }
    if(found){
        var wewhtmlkoszyczka = "nic nie ma";
    }
    document.getElementById("divkoszyka").innerHTML = wewhtmlkoszyczka;
}
function modyfikuj(i){
    obiekcik = JSON.parse(localStorage.getItem(localStorage.key(i)));
    document.getElementById("nazwa").value = localStorage.key(i);
    document.getElementById("cena").value = obiekcik.cena;
    document.getElementById("kolor").value = obiekcik.kolor;
    document.getElementById("liczba").value = obiekcik.liczba;
}
function usunel(i){
    localStorage.removeItem(localStorage.key(i));
}
function usun(){
    localStorage.clear();
}
