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
        FuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "2", "Elégséges", szovegesErtekeles(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "2", "Elégséges");
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "5", "Jeles", szovegesErtekeles(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "5", "Jeles");
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "10", "Hibás adat", szovegesErtekeles(10));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érdemjegy szöveges értékelés", "10", "Hibás adat");
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Koordinata rendszer:", "0,0", "Az x és y koordináta az origóban van.", koordinataRendszer(0, 0));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Koordinata rendszer:", "0,0", "Az x és y koordináta az origóban van.");
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Koordinata rendszer:", "5,-3", "Az x és y koordináta a negyedik síknegyedben van.", koordinataRendszer(5, -3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Koordinata rendszer:", "5,-3", "Az x és y koordináta a negyedik síknegyedben van.");
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Koordinata rendszer:", "-8,4", "Az x és y koordináta a második síknegyedben van.", koordinataRendszer(-8, 4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Koordinata rendszer:", "-8,4", "Az x és y koordináta a második síknegyedben van.");
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Testtömeg index:", "45,1.5", "Normális testsúly", testTomegIndex(45, 1.5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Testtömeg index:", "45,1.5", "Normális testsúly");
    }
}

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Testtömeg index:", "25,1.2", "Enyhe soványság", testTomegIndex(25, 1.2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Testtömeg index:", "25,1.2", "Enyhe soványság");
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Testtömeg index:", "95,1.6", "II. fokú elhízás", testTomegIndex(95, 1.6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Testtömeg index:", "95,1.6", "II. fokú elhízás");
    }
}
function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Tömb terjedelme:", "[3, 12, 21, 42, 63]", 60, Terjedelem([3, 12, 21, 42, 63]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Tömb terjedelme:", "[3, 12, 21, 42, 63]", 60);
    }
}
function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Tömb terjedelme:", "[18, 22, 34, 56, 182]", 164, Terjedelem([18, 22, 34, 56, 182]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Tömb terjedelme:", "[18, 22, 34, 56, 182]", 164);
    }
}
function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Tömb terjedelme:", "[34, 6, 55, 31, 100]", 94, Terjedelem([34, 6, 55, 31, 100]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Tömb terjedelme:", "[34, 6, 55, 31, 100]", 94);
    }
}
function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[10, 23, 12, 24, 31, 33, 42, 20]", 4, HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[10, 23, 12, 24, 31, 33, 42, 20]", 4);
    }
}
function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[25, 11, 56, 42, 3, 66, 24, 30]", 5, HarommalOszthatokSzama([25, 11, 56, 42, 3, 66, 24, 30]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[25, 11, 56, 42, 3, 66, 24, 30]", 5);
    }
}
function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[9, 24, 56, 133, 49, 72, 53, 13]", 3, HarommalOszthatokSzama([9, 24, 56, 133, 49, 72, 53, 13]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hárommal oszthatóak száma:", "[9, 24, 56, 133, 49, 72, 53, 13]", 3);
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
    Teszt10();
    Teszt11();
    Teszt12();
    Teszt13();
    Teszt14();
    Teszt15();



}
TesztFuttato();