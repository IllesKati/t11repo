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
        FuggvenyVisszajelzoSor("Négyzet kerület", "2", 8, NegyzetKerulet(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Négyzet kerület", "2", 8);
    }
}
function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Négyzet kerület", "5", 20, NegyzetKerulet(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Négyzet kerület", "5", 20);
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Négyzet terület", "6", 36, NegyzetTerulet(6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Négyzet terület", "6", 6);
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Négyzet terület", "7", 49, NegyzetTerulet(7));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Négyzet terület", "7", 49);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "3,5", 16, TeglalapKerulet(3, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "3,5", 16);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "4,5", 18, TeglalapKerulet(4, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "4,5", 18);
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Téglalap terület", "2,5", 10, TeglalapTerulet(2, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap terület", "2,5", 10);
    }
}

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Téglalap terület", "3,9", 27, TeglalapTerulet(3, 9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap terület", "3,9", 27);
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Hatványozó", "3,3", 27, Hatvanyozo(3, 3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hatványozó", "3,3", 27);
    }
}

function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Hatványozó", "5,3", 125, Hatvanyozo(5, 3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hatványozó", "5,3", 125);
    }
}

function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Kocka felszín", "2", 24, KockaFelszin(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka felszín", "2", 24);
    }
}

function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Kocka felszín", "3", 54, KockaFelszin(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka felszín", "3", 54);
    }
}

function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Legnagyobb közös osztó", "3,4", 1, LegNagyobbKozosOszto(3, 4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Legynagyobb közös osztó ", "3,4", 1);
    }
}

function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("Legnagyobb közös osztó", "16,22", 2, LegNagyobbKozosOszto(16, 22));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Legynagyobb közös osztó ", "16,22", 2);
    }
}

function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("Nagy kezdőbetűs: ", "alma", "Alma", Nagybetus("alma"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Nagy kezdőbetűs:", "alma", "Alma");
    }
}

function Teszt16() {
    try {
        FuggvenyVisszajelzoSor("Nagy kezdőbetűs: ", "tipescript", "Tipescript", Nagybetus("tipescript"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Nagy kezdőbetűs:", "tipescript", "Tipescript");
    }
}

function Teszt17() {
    try {
        FuggvenyVisszajelzoSor("Kis kezdőbetűs: ", "Máté", "máté", Kisbetus("Máté"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kis kezdőbetűs:", "Máté", "máté");
    }
}

function Teszt18() {
    try {
        FuggvenyVisszajelzoSor("Kis kezdőbetűs: ", "Katalin", "katalin", Kisbetus("Katalin"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kis kezdőbetűs:", "Katalin", "katalin");
    }
}

function Teszt19() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma: ", "Szép az élet.", 4, MaganHangzokSzama("Szép az élet."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma:", "Szép az élet.", 4);
    }
}

function Teszt20() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzók száma: ", "Kár, hogy nemsokára vége a tanfolyamnak.", 13, MaganHangzokSzama("Kár, hogy nemsokára vége a tanfolyamnak."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzók száma:", "Kár, hogy nemsokára vége a tanfolyamnak. ", 13);
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
    Teszt16();
    Teszt17();
    Teszt18();
    Teszt19();
    Teszt20();


}
TesztFuttato();