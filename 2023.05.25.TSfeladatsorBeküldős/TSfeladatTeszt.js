function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma:", "Nyáron sokat süt a nap.", 2, EkezetesBetukSzama("Nyáron sokat süt a nap."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma:", "Nyáron sokat süt a nap.", 2);
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Camelcase szöveg:", "nyáron sokat süt a nap.", "nyáronSokatSütANap", camelCaseGenerator("nyáron sokat süt a nap."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Camelcase szöveg:", "nyáron sokat süt a nap.", "nyáronSokatSütANap");
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok:", "2, 3, 4, 5, 6, 7, 8, 9, 10", 2, 3, 5, 7, PrimekLista("2, 3, 4, 5, 6, 7, 8, 9, 10"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok:", "2, 3, 4, 5, 6, 7, 8, 9, 10", 2, 3, 5, 7);
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();

}
TesztFuttato();