function oblicz(){
    var kwota=document.getElementById('kwota');
    K = parseInt(kwota.value);
    var ilerat=document.getElementById('ilerat');
    n = parseInt(ilerat.value);
    var procent=document.getElementById('procent');
    pr = parseInt(ilerat.value);
    pr_mc = pr/12;
    var rata=document.getElementById('rata');
    var odsetki=document.getElementById('odsetki');
    if(!(isNaN(K)) && !(isNaN(n)) && !(isNaN(pr)) && isFinite(K) && isFinite(n) && isFinite(pr)){
        rataV = (K*pr_mc)/(1-(1/Math.pow((1+pr_mc),n)))
        console.log(rataV)
        if(!(isNaN(rataV)) && isFinite(rataV)){
            rata.value = rataV
            odsetki.value = rataV * n;
        } else {
            console.log("blad liczenia")
        }
    } else {
        console.log("złe parametry");
    }
}