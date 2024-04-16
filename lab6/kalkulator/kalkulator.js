function oblicz(){
    var tab = document.getElementsByName("dzialanie");
    var dzialanie;
    for(let i=0; i<tab.length; i++){
        if(tab[i].checked){
            dzialanie = tab[i].value;
        }
    }
    var liczba1 = parseInt(document.getElementById("liczba1").value);
    var liczba2 = parseInt(document.getElementById("liczba2").value);
    var wynik = document.getElementById("wynik");
    if(isFinite(liczba1) && !(isNaN(liczba1)) && isFinite(liczba2) && !(isNaN(liczba2))){
        switch(dzialanie){
            case "+": 
                wynik.value = liczba1 + liczba2;
            break;
            case "-":
                wynik.value = liczba1 - liczba2;
            break;
            case "*":
                wynik.value = liczba1 * liczba2;
            break;
            case "/":
                wynikowo = liczba1 / liczba2;
                if(isNaN(wynikowo) || !(isFinite(wynikowo))){
                    console.log("cos poszlo nie tak");
                } else {
                    wynik.value = wynikowo;
                }
            break;
        }
    } else {
        console.log("zle dane")
    }
    
}